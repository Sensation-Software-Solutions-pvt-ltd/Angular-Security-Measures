import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerRoutingModule } from './inner-module-routing.module';
import { InnerLayoutComponent } from './layout/inner-layout/inner-layout.component';
import { InnerHeaderComponent } from './layout/inner-header/inner-header.component';
import { InnerSidebarComponent } from './layout/inner-sidebar/inner-sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { FormsModule } from '@angular/forms';
import { SanitizingComponent } from './pages/sanitizing/sanitizing.component';

@NgModule({
  declarations: [
    InnerLayoutComponent,
    InnerHeaderComponent,
    InnerSidebarComponent,
    HomeComponent,
    UsersListComponent,
    UserDetailComponent,
    SanitizingComponent
  ],
  imports: [
    CommonModule,
    InnerRoutingModule,
    FormsModule]
})
export class InnerModule { }
