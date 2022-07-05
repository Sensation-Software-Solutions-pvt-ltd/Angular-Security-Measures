import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureInnerPagesGuard } from 'src/app/services/auth-service/auth.service';
import { InnerLayoutComponent } from './layout/inner-layout/inner-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { UsersListComponent } from './pages/users-list/users-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '', component: InnerLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent ,canActivate:[SecureInnerPagesGuard]},
      { path: 'user-list', component: UsersListComponent,canActivate:[SecureInnerPagesGuard]},
      { path: 'user-detail', component: UserDetailComponent,canActivate:[SecureInnerPagesGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InnerRoutingModule { }
