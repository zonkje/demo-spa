import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PostsComponent} from './posts.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostItemComponent} from './post-list/post-item/post-item.component';
import {PostStartComponent} from './post-start/post-start.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PostsRoutingModule} from './posts-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    PostItemComponent,
    PostStartComponent,
    PostEditComponent,
  ],
  imports: [
    RouterModule, SharedModule, ReactiveFormsModule, PostsRoutingModule
  ]
})
export class PostsModule {

}
