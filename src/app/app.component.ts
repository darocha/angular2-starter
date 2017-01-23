import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [AppService]
})
export class AppComponent {
    constructor(
        private appService: AppService
    ) {}

    appName = this.appService.getAppName();

    test() {
        console.log(this.appName);
    }
}
