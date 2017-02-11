import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'characters'},
    {path: 'characters', component: CharacterListComponent},
    {path: 'characters/:id', component: CharacterComponent},
    {path: 'vehicles', component: VehicleListComponent},
    {path: 'vehicles/:id', component: VehicleComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routableComponents = [
    CharacterListComponent,
    CharacterComponent,
    VehicleListComponent,
    VehicleComponent
];
