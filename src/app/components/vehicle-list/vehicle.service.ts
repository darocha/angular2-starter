import { Injectable } from '@angular/core';
import { Vehicle } from '../vehicle/vehicle.model';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {

    constructor(private http: Http) {}

    getVehicles() {
        return this.http.get('assets/mock-data/vehicles.json')
            .map((response: Response) => <Vehicle[]>response.json().data)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let msg = `Status code ${error.status} on url ${error.url}`;
        return Observable.throw(msg);
    }
}
