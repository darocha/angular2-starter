import { Injectable } from '@angular/core';
import { Character } from '../character/character.model';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import _ from 'lodash';

@Injectable()
export class CharacterService {

    constructor(private http: Http) {}

    getCharacters() {
        return this.http.get('assets/mock-data/characters.json')
            .map((response: Response) => <Character[]>response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }
}
