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

  private posts: Post[] = [];

  getPosts() {
    this.http.get<Post[]>('http://localhost:8080/post', {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDg5NDQ2OSwiZXhwIjoxNTk2NTc4NDAwfQ.ujJXkbGPdWaRWhKExRaF7zGSemcJburM5ea_CiSfWOmLBDTfsXTYrUjs7Z3YbqM9'})
    }).subscribe(
      posts => {
        console.log(posts);
        this.posts = posts;
        this.postChanged.next(this.posts);
      }
    );
  }

  getPost(index: number) {
    /*
    * There is a bug in app. We fetch posts from DB only in ngOnInit method in PostListComponent
    * When user goes straight to the url like /post/2 we have a problem.
    * We can't show details of specific post because we didn't fetch posts from DB.
    * We can modify getPost method so that it will send http request for speficic post, but the list of posts won't be displayed anyway.
    * Adding subscription for all components sounds like a bad idea...
     */
    return this.getPostById(index);
  }

  addPost(post: NewPost) {
    this.http.post<Post>('http://localhost:8080/post',
      post
      , {
        headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDg5NDQ2OSwiZXhwIjoxNTk2NTc4NDAwfQ.ujJXkbGPdWaRWhKExRaF7zGSemcJburM5ea_CiSfWOmLBDTfsXTYrUjs7Z3YbqM9'})
      })
      .subscribe(response => {
        console.log(response);
        // or better way will be to push response data to this.posts array?
        this.getPosts();
        this.postChanged.next(this.posts);
      });
  }

  updatePost(index: number, newPost: NewPost) {
    this.http.patch<Post>('http://localhost:8080/post/' + index,
      newPost,
      {
        headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDg5NDQ2OSwiZXhwIjoxNTk2NTc4NDAwfQ.ujJXkbGPdWaRWhKExRaF7zGSemcJburM5ea_CiSfWOmLBDTfsXTYrUjs7Z3YbqM9'})
      }
    ).subscribe(response => {
      console.log(response);
      this.getPosts();
      this.postChanged.next(this.posts);
    });
  }

  deletePost(index: number) {
    this.http.delete('http://localhost:8080/post/'+index, {
      headers: new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJrb3Rla2tvdGVra290ZWsxIiwiYXV0aG9yaXRpZXMiOlt7ImF1dGhvcml0eSI6ImZpeHR1cmU6cmVhZCJ9LHsiYXV0aG9yaXR5IjoicG9zdDp3cml0ZSJ9LHsiYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn0seyJhdXRob3JpdHkiOiJwb3N0OnJlYWQifV0sImlhdCI6MTU5NDg5NDQ2OSwiZXhwIjoxNTk2NTc4NDAwfQ.ujJXkbGPdWaRWhKExRaF7zGSemcJburM5ea_CiSfWOmLBDTfsXTYrUjs7Z3YbqM9'})
    }).subscribe( () => {
      console.log("Delete request sent");
      this.getPosts();
      this.postChanged.next(this.posts);
    })
  }

  private getPostById(postId: number): Post {
    for (let post of this.posts) {
      if (post.id === postId) {
        return post;
      }
    }
    return null;
  }

}
