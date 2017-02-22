import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LoginRoutingModule, routedComponents } from './login-routing.module';

@NgModule({
    imports: [LoginRoutingModule, CommonModule, BrowserModule],
    declarations: [routedComponents]
})
export class LoginModule{}
