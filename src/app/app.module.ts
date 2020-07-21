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

import { PostEditComponent } from './posts/post-edit/post-edit.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostService} from './posts/post.service';
import {HttpClientModule} from '@angular/common/http';
import {PostsResolverService} from './posts/posts-resolver.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {AuthService} from './auth/auth.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {PostStartComponent} from './posts/post-start/post-start.component';


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
    LoginComponent,
    RegisterComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService, PostsResolverService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
