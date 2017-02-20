import { Component, OnInit } from '@angular/core';

import { ModalService } from '../modal/modal.service';

class MenuItem {
    constructor(public caption: string, public link: any[]) {}
}

@Component({
    selector: 'story-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    menuItems: MenuItem[];

    constructor (
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.menuItems = [{
            caption: 'Dashboard', link: ['/dashboard']
        }, {
            caption: 'Characters', link: ['/characters']
        }, {
            caption: 'Vehicles', link: ['/vehicles']
        }, {
            caption: 'Admin', link: ['/admin']
        }, {
            caption: 'login', link: ['/login']
        }];
    }

    resetDb() {
        let msg = 'Are you sure you want to reset the database?';
        this.modalService.activate(msg).then(responseOk => {
            if (responseOk) {
                console.log('reset db');
            }
        });
    }
}
