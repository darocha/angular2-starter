import { Component } from '@angular/core';
import { Character } from '../character/character.model';
import { CharacterService } from './character.service';

@Component({
    selector: 'my-character-list',
    templateUrl: 'character-list.template.html',
    styles: ['li {cursor: pointer;}']
})
export class CharacterListComponent {
    messages: string[] = [];
    selectedCharacter: Character;
    characters: Array<Character>;

    constructor (
        private characterService: CharacterService
    ) {
        this.characters = characterService.getCharacters();
    }

    select(character: Character) {
        this.selectedCharacter = character;
    }
}
