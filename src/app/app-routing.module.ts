import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  },
  /* Is it possible to provide lazy-loading for AuthModule?
  there are two routes like:
  http://localhost:4200/register
  http://localhost:4200/login
  Maybe I should add new component e.g AuthComponent, and those two will be children of it (auth/login & auth/register)
  AuthComponent will be simple page where you choose between LOGIN and REGISTER
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  */
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/posts'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
