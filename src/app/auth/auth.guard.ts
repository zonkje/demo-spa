import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map, take} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> |
    boolean | UrlTree {
    return this.authService.user
      .pipe(
        take(1),
        map(
          user => {
            const isAuth = !!user;
            if(isAuth){
              return true;
            }
            // something is wrong:
            // after logging in, app redirect me to the /login page again, instead of navigate to /posts
            // it seems like after I submit the login form, this guard checks auth data
            // but the response from api does not come by then
            return this.router.createUrlTree(['/login']);
          }
        )
      );
  }
}
