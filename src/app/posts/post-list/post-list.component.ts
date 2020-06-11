import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Output() postElementSelected = new EventEmitter<Post>();

  posts: Post[] = [
    new Post("Title of post", "Content of this interesting post", "yesterday", "Szymek"),
    new Post("Another title", "Meow meow meow meow", "tomorrow", "Ptys"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPostSelected(post: Post){
    this.postElementSelected.emit(post);
  }

}
