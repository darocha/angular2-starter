import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterComponent } from './character/character.component';
import { CharactersComponent } from './characters.component';
import { CanDeactivateGuard } from '../core';

const routes: Routes = [{
    path: '',
    component: CharactersComponent,
    children: [{
        path: '',
        component: CharacterListComponent
    }, {
        path: ':id',
        component: CharacterListComponent,
        canDeactivate: [CanDeactivateGuard]
    }]
}];
@NgModule()
export class CharactersRoutingModule {}
export const routedComponents = [CharactersComponent, CharacterListComponent, CharacterComponent];
