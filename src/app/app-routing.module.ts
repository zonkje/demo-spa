import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
