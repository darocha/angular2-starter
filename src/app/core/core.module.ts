import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { ModalModule } from './modal/modal.module';
import { SpinnerModule } from './spinner/spinner.module';
import { NavComponent } from './nav/nav.component';
import { ToastModule } from './toast/toast.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';

import { EntityService } from './entity.service';
import { ExceptionService } from './exception.service';
import { MessageService } from './message.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        SpinnerModule,
        ToastModule,
        PageNotFoundModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ModalModule,
        SpinnerModule,
        ToastModule,
        PageNotFoundModule,
        [NavComponent]
    ],
    declarations: [NavComponent],
    providers: [
        EntityService,
        ExceptionService,
        MessageService,
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        throwIfAlreadyLoaded(parentModule, 'CoreModule');
    }
}
