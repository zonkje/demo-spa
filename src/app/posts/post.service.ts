import {Post} from './post.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';

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
    return this.posts.slice();
  }

  getPost(index: number) {
    return this.posts[index];
  }

  addPost(post: Post) {
    this.http.post('http://localhost:8080/post', {
      'title': 'Angular post',
      'content': 'from angular'
    }, {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDM3ODE0OCwiZXhwIjoxNTk2MDYwMDAwfQ.7jwtximBQYT42eYE_GnAVNK89IB7T_WzA04GsZUfYR9PLPipRNgr9Lp4gurch0lS'})
    })
      .subscribe(response => {
        console.log(response);
      });
    this.posts.push(post);
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
