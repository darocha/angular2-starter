import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { ToastService } from './toast/toast.service';

export interface ResetMessage {
    message: string;
}

@Injectable()
export class MessageService {
    private subject = new Subject<ResetMessage>();

    state = this.subject;
    constructor(private http: Http, private toastService: ToastService) {}

    resetDb() {
        console.log('Reset the Data Successfully');
    }
}
