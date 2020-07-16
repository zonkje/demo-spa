import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts/posts.component';
import {ProfileComponent} from './profile/profile.component';
import {PostStartComponent} from './posts/post-start/post-start.component';
import {PostDetailsComponent} from './posts/post-details/post-details.component';
import {PostEditComponent} from './posts/post-edit/post-edit.component';
import {PostsResolverService} from './posts/posts-resolver.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/posts', pathMatch: 'full'},
  {path: 'posts', component: PostsComponent, children: [
      { path: '', component: PostStartComponent },
      { path: 'new', component: PostEditComponent },
      { path: ':id', component: PostDetailsComponent, resolve: [PostsResolverService]},
      { path: ':id/edit', component: PostEditComponent, resolve: [PostsResolverService] },
    ]},
  {path: 'profile', component: ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
