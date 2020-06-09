import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {SidenavComponent} from './sidenav/sidenav.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';


@NgModule({
  declarations: [
    AppComponent,

    SidenavComponent,
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    PostItemComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
