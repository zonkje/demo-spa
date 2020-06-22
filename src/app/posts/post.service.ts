import {Post} from './post.model';

export class PostService {

  private posts: Post[] = [
    new Post("Title of post", "Content of this interesting post", "yesterday", "Szymek"),
    new Post("Another title", "Meow meow meow meow", "tomorrow", "Ptys"),
  ];

  getPosts(){
    return this.posts.slice();
  }

  getPost(index: number){
    return this.posts[index];
  }

}
