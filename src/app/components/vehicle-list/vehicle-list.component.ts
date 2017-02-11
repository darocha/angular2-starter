import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../vehicle/vehicle.model'
import { VehicleService } from './vehicle.service';

@Component({
    selector: 'story-vehicles',
    templateUrl: 'vehicle-list.template.html',
    styles: [`
        .vechicles {list-style-type: none;}
        *.vehicles li {padding: 4px; cursor: pointer;}
    `]
})
export class VehicleListComponent implements OnInit {
    vehicles: Array<Vehicle>;

    constructor(private vehicleService: VehicleService) {}

    ngOnInit() {
        this.getVehicles();
    }

    private getVehicles() {
        this.vehicleService.getVehicles()
            .subscribe(
                vehicles => this.vehicles = vehicles
            );
    }
}
