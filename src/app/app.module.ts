import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {SidenavComponent} from './sidenav/sidenav.component';
import { PostsComponent } from './posts/posts.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostItemComponent } from './posts/post-list/post-item/post-item.component';
import { ProfileComponent } from './profile/profile.component';
import {AppRoutingModule} from './app-routing.module';
import { PostStartComponent } from './posts/post-start/post-start.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    PostsComponent,
    PostListComponent,
    PostDetailsComponent,
    PostItemComponent,
    ProfileComponent,
    PostStartComponent,
    PostEditComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
