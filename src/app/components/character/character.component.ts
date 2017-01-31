import { Component, Input, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Character } from '../character/character.model';

@Component({
    selector: 'my-character',
    templateUrl: 'character.template.html'
})
export class CharacterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
    @Input() character: Character;

    ngAfterViewInit() {
        console.log(`ngAfterViewInit for ${this.character.name}`);
    }

    ngOnChanges() {
        console.log(`ngOnChanges for ${this.character.name}`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy for ${this.character.name}`);
    }

    ngOnInit() {
        console.log(`ngOnInit for ${this.character.name}`);
    }
}
