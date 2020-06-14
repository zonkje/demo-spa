import {Post} from './post.model';
import {EventEmitter} from '@angular/core';

export class PostService {

  selectedPost = new EventEmitter<Post>();

  private posts: Post[] = [
    new Post("Title of post", "Content of this interesting post", "yesterday", "Szymek"),
    new Post("Another title", "Meow meow meow meow", "tomorrow", "Ptys"),
  ];

  getPosts(){
    return this.posts.slice();
  }

}
