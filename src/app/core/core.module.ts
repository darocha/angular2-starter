import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModalModule } from './modal/modal.module';
import { SpinnerModule } from './spinner/spinner.module';
import { NavComponent } from './nav/nav.component';
import { ToastModule } from './toast/toast.module';

import './rxjs-extensions';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        SpinnerModule,
        ToastModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        SpinnerModule,
        ToastModule,
        [NavComponent]
    ],
    declarations: [NavComponent],
    providers: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
