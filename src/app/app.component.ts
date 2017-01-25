import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.template.html'
})
export class AppComponent {
    constructor(
        private appService: AppService
    ) {}

    appName = this.appService.getAppName();
}
