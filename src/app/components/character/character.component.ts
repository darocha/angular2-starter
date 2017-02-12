import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { CharacterService } from '../character-list/character.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'my-character',
    templateUrl: 'character.template.html'
})
export class CharacterComponent implements OnInit {
    @Input() character: Character;
    private id: any;

    constructor(
        private characterService: CharacterService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        if (!this.character) {
            this.route
              .params
              .map(params => params['id'])
              .do(id => this.id = +id)
              .subscribe(id => this.getCharacter());
        }
    }

    private getCharacter() {
        this.characterService.getCharacter(this.id)
            .subscribe(character => this.setEditCharacter(character));
    }

    private gotoCharacters() {
        let route = ['/characters'];
        this.router.navigate(route);
    }

    private setEditCharacter(character: Character) {
        if (character) {
            this.character = character;
        } else {
            this.gotoCharacters();
        }
    }
}
