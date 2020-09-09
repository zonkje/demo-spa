import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import {PostsModule} from './posts/posts.module';
import {CoreModule} from './core.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    PostsModule,
    AuthModule,
    CoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
