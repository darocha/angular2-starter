import { Component, OnInit } from '@angular/core';
import { Character } from '../character/character.model';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-character-list',
    templateUrl: 'character-list.template.html',
    styles: ['li {cursor: pointer;}']
})
export class CharacterListComponent implements OnInit {
    selectedCharacter: Character;
    characters: Array<Character>;

    constructor (
        private characterService: CharacterService
    ) {}

    ngOnInit() {
        this.characters = this.characterService.getCharacters();
    }

    clearSelection() {
        this.selectedCharacter = null;
    }

    select(character: Character) {
        this.selectedCharacter = character;
    }
}
