import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { SpinnerState, SpinnerService } from './spinner.service';

declare var componentHandler: any;

@Component({
    selector: 'story-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit, OnDestroy {
    visible = false;

    private spinnerStateChanged: Subscription;

    constructor (
        private spinnerService: SpinnerService
    ) {}

    ngOnInit() {
        componentHandler.upgradeDom();
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe((state: SpinnerState) => this.visible = state.show);
    }

    ngOnDestroy() {
        this.spinnerStateChanged.unsubscribe();
    }
}
