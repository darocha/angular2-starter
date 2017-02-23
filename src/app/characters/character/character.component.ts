import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import _ from "lodash";

import { Character } from '../shared/character.model';
import { CharacterService } from '../shared/character.service';
import { CanComponentDeactivate, EntityService, ModalService, ToastService } from '../../core';

declare var componentHandler: any;

@Component({
    selector: 'story-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnDestroy, OnInit, CanComponentDeactivate {
    @Input() character: Character;
    editCharacter: Character = <Character>{};

    private dbResetSubscription: Subscription;
    private id: any;

    constructor(
        private entityService: EntityService,
        private modalService: ModalService,
        private route: ActivatedRoute,
        private router: Router,
        private characterService: CharacterService,
        private toastService: ToastService
    ) {}

    cancel(showToast = true) {
        this.editCharacter = this.entityService.clone(this.character);
        if (showToast) {
            this.toastService.activate(`Cancelled changes to ${this.character.name}`);
        }
    }

    canDeactivate() {
        return !this.character || !this.isDirty() || this.modalService.activate();
    }

    delete() {
        let msg = `Do you want to delete ${this.character.name}?`;
        this.modalService.activate(msg).then(responseOk => {
            if (responseOk) {
                this.cancel(false);
                this.characterService.deleteCharacter(this.character)
                    .subscribe(() => {
                        this.toastService.activate(`Deleted ${this.character.name}`);
                        this.gotoCharacters();
                    },
                    (err) => this.handleServiceError('Delete', err),
                    () => console.log('Delete Completed'));
            }
        })
    }

    isAddMode() {
        return _.isNaN(this.id);
    }

    ngOnDestroy() {
        this.dbResetSubscription.unsubscribe();
    }

    ngOnInit() {
        componentHandler.upgradeDom();
        this.dbResetSubscription = this.characterService.onDbReset
            .subscribe(() => this.getCharacter());
        this.route.params.map(params => params['id'])
            .do(id => this.id = +id)
            .subscribe(id => this.getCharacter());
    }

    save() {
        this.character = this.entityService.merge(this.character, this.editCharacter);
        let character = this.character;
        if (character.id === null) {
            this.characterService.addCharacter(character)
                .subscribe(s => {
                    this.setEditCharacter(s);
                    this.toastService.activate(`Successfully added ${s.name}`);
                    this.gotoCharacters();
                });
            return;
        }
        this.characterService.updateCharacter(character)
            .subscribe(() => this.toastService.activate(`Successfully saved ${character.name}`));
    }

    private getCharacter() {
        if (this.id === 0) {
            return;
        }
        if (this.isAddMode()) {
            this.character = <Character>{name: '', side: ''};
            this.editCharacter = this.entityService.clone(this.character);
            return;
        }
        this.characterService.getCharacter(this.id)
            .subscribe(character => this.setEditCharacter(character));
    }

    private gotoCharacters() {
        this.router.navigate(['/characters']);
    }

    private handleServiceError(op: string, err: any) {
        console.error(`${op} error: ${err.message || err}`);
    }

    private isDirty() {
        return this.entityService.propertiesDiffer(this.character, this.editCharacter);
    }

    private setEditCharacter(character: Character) {
        if (character) {
            this.character = character;
            this.editCharacter = this.entityService.clone(this.character);
        } else {
            this.gotoCharacters();
        }
    }
}
