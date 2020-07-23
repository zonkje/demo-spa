import {Post} from './post.model';
import {Subject} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NewPost} from './new-post.model';
import {tap} from 'rxjs/operators';

@Injectable()
export class PostService {

  constructor(
    private http: HttpClient
  ) {
  }

  postChanged = new Subject<Post[]>();

  private posts: Post[] = [];

  getPosts() {
    return this.http.get<Post[]>('http://localhost:8080/post')
      .pipe(
        tap(posts => {
          console.log(posts);
          this.posts = posts;
          this.postChanged.next(this.posts);
        })
      );
  }

  getPost(index: number) {
    return this.getPostById(index);
  }

  addPost(post: NewPost) {
    this.http.post<Post>('http://localhost:8080/post',
      post)
      .subscribe(response => {
        console.log(response);
        // or better way will be to push response data to this.posts array?
        this.getPosts().subscribe();
        this.postChanged.next(this.posts);
      });
  }

  updatePost(index: number, newPost: NewPost) {
    this.http.patch<Post>('http://localhost:8080/post/' + index,
      newPost)
      .subscribe(response => {
        console.log(response);
        this.getPosts().subscribe();
        this.postChanged.next(this.posts);
      });
  }

  deletePost(index: number) {
    this.http.delete('http://localhost:8080/post/' + index)
      .subscribe(() => {
        console.log('Delete request sent');
        this.getPosts().subscribe();
        this.postChanged.next(this.posts);
      });
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
