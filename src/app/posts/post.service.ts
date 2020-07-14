import {Post} from './post.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NewPost} from './new-post.model';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) {
  }

  postChanged = new Subject<Post[]>();

  private posts: Post[] = [
    new Post('Title of post', 'Content of this interesting post', 'yesterday', 'Szymek'),
    new Post('Another title', 'Meow meow meow meow', 'tomorrow', 'Ptys'),
    new Post('Test title', 'Testing long content asdfasdfasdfasdfasdfasdfasdfasdfasdfasdf', 'tomorrow', 'Ptys'),
  ];

  getPosts() {
    this.http.get('http://localhost:8080/post', {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDcyNDcxMSwiZXhwIjoxNTk2NDA1NjAwfQ.8KFmW5O71aTKPV93gRycgo-KnIwNegS3mNsziTEM3zgSoJ-OxvwscZS30PDZm_Je'})
    }).subscribe(
      posts => {
        console.log(posts);
      }
    );
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(post: NewPost) {
    console.log("Post service");
    console.log(post);
    this.http.post('http://localhost:8080/post',
      post
    , {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDcyNTEyMywiZXhwIjoxNTk2NDA1NjAwfQ.J2gh3z12BDXjTX0--wCJUUk0NZwoxH3KsVvJqBqnqSgsjdyCQQNNdhBoYMG3qjSt'})
    })
      .subscribe(response => {
        console.log(response);
      });
    // this.posts.push(post);
    this.postChanged.next(this.posts.slice());
  }

  updatePost(index: number, newPost: Post) {
    this.posts[index] = newPost;
    this.postChanged.next(this.posts.slice());
  }

  deletePost(index: number) {
    this.posts.splice(index, 1);
    this.postChanged.next(this.posts.slice());
  }

}
