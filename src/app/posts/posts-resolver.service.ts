import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {PostService} from './post.service';
import {Post} from './post.model';

@Injectable()
export class PostsResolverService implements Resolve<Post[]>{

  constructor(private postService: PostService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.postService.getPosts();

  }

}
