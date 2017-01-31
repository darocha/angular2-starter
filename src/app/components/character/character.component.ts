import { Component, Input } from '@angular/core';
import { Character } from '../character/character.model';

@Component({
    selector: 'my-character',
    templateUrl: 'character.template.html'
})
export class CharacterComponent {
    @Input() character: Character;
}
