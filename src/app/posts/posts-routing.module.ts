import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './posts.component';
import {AuthGuard} from '../auth/auth.guard';
import {PostStartComponent} from './post-start/post-start.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostsResolverService} from './posts-resolver.service';

const routes: Routes = [
  {path: 'posts', component: PostsComponent, canActivate: [AuthGuard] ,children: [
      { path: '', component: PostStartComponent },
      { path: 'new', component: PostEditComponent },
      { path: ':id', component: PostDetailsComponent, resolve: [PostsResolverService]},
      { path: ':id/edit', component: PostEditComponent, resolve: [PostsResolverService] }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule {}
