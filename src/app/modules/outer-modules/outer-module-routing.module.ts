import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OuterPagesGuard } from 'src/app/services/login-auth-service/login.auth.service';
import { LayoutComponent } from './layout/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'login', component: LoginComponent,canActivate:[OuterPagesGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OuterRoutingModule { }
