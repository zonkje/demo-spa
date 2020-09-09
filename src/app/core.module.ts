import {NgModule} from '@angular/core';
import {PostService} from './posts/post.service';
import {PostsResolverService} from './posts/posts-resolver.service';
import {AuthService} from './auth/auth.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import {AuthGuard} from './auth/auth.guard';

@NgModule({
  providers: [
    PostService,
    PostsResolverService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    AuthGuard
  ]
})
export class CoreModule {
}
