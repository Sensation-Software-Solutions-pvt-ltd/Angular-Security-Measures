import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OuterRoutingModule } from './outer-module-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { LayoutComponent } from './layout/layout/layout.component';

@NgModule({
  declarations: [
    LoginComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    OuterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OuterModule { }
