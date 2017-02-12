import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-character-list',
    templateUrl: 'character-list.template.html',
    styles: [`
        .characters {list-style-type: none;}
        *.characters li {padding: 4px; cursor: pointer;}
    `]
})
export class CharacterListComponent implements OnInit {
    selectedCharacter: Character;
    characters: Array<Character>;
    errorMessage: string;

    constructor (
        private characterService: CharacterService
    ) {}

    ngOnInit() {
        this.getCharacters();
    }

    clearSelection() {
        this.selectedCharacter = null;
    }

    select(character: Character) {
        this.selectedCharacter = character;
    }

    private getCharacters() {
        this.characterService.getCharacters()
            .subscribe(
                characters => this.characters = characters,
                error => this.errorMessage = <any>error
            );
    }
}
