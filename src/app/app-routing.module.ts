import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {ProfileComponent} from './profile/profile.component';
import {PostStartComponent} from './posts/post-start/post-start.component';
import {PostDetailsComponent} from './posts/post-details/post-details.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostsResolverService} from './posts/posts-resolver.service';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard] ,children: [
      { path: '', component: PostStartComponent },
      { path: 'new', component: PostEditComponent },
      { path: ':id', component: PostDetailsComponent, resolve: [PostsResolverService]},
      { path: ':id/edit', component: PostEditComponent, resolve: [PostsResolverService] },
    ]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/posts'}

]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
