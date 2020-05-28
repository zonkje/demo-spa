import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post("Title of post", "Szymek", "Content of this interesting post", "yesterday"),
    new Post("Another title", "Ptys", "Meow meow meow meow", "tomorrow"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
