import { Injectable } from '@angular/core';
import { Character } from '../character/character.model';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharacterService {

    constructor(private http: Http) {}

    getCharacters() {
        return this.http.get('assets/mock-data/characters.json')
            .map((response: Response) => <Character[]>response.json().data)
            .catch(this.handleError);
    }

    getCharacter(id: number) {
        return this.getCharacters()
            .map(characters => characters.find(character => character.id === id));
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }
}
