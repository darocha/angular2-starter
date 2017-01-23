import { Component } from '@angular/core';
import { VehicleService } from './vehicle.service';

@Component({
    selector: 'my-vehicles',
    templateUrl: 'vehicle.template.html'
})
export class VehicleComponent {
    constructor (
        private vehicleService: VehicleService
    ) {}

    vehicles = this.vehicleService.getVehicles();

    imagePath='assets/img/angular-logo.png';
    link='http://angular.io';
    story='The Empire Strikes Back';
    title='Angular 2 Property Binding';

    log(msg) {
        console.log(this.vehicles);
    }
}
