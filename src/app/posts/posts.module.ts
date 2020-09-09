import {NgModule} from '@angular/core';
import {PostsComponent} from './posts.component';
import {PostListComponent} from './post-list/post-list.component';
import {PostDetailsComponent} from './post-details/post-details.component';
import {PostItemComponent} from './post-list/post-item/post-item.component';
import {PostStartComponent} from './post-start/post-start.component';
import {PostEditComponent} from './post-edit/post-edit.component';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {PostsRoutingModule} from './posts-routing.module';

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
    RouterModule, CommonModule, ReactiveFormsModule, PostsRoutingModule
  ],
  exports: [
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    PostItemComponent,
    PostStartComponent,
    PostEditComponent,
  ]
})
export class PostsModule {

}
