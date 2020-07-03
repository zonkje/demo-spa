import {Post} from './post.model';
import {Subject} from 'rxjs';

export class PostService {

  postChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post("Title of post", "Content of this interesting post", "yesterday", "Szymek"),
    new Post("Another title", "Meow meow meow meow", "tomorrow", "Ptys"),
    new Post("Test title", "Testing long content asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf", "tomorrow", "Ptys"),
  ];

  getPosts(){
    return this.posts.slice();
  }

  getPost(index: number){
    return this.posts[index];
  }

  addPost(post: Post){
    this.posts.push(post);
    this.postChanged.next(this.posts.slice());
  }
  updatePost(index: number, newPost: Post){
    this.posts[index] = newPost;
    this.postChanged.next(this.posts.slice());
  }

  deletePost(index: number){
    this.posts.splice(index,1);
    this.postChanged.next(this.posts.slice());
  }

}
