import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureInnerPagesGuard } from './services/auth-service/auth.service';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/modules/outer-modules/outer-module.module').then(module => module.OuterModule) },
  { path: 'user', loadChildren: () => import('../app/modules/inner-modules/inner-module.module').then(module => module.InnerModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
