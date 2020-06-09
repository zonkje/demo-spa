import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
<<<<<<< HEAD
    new Post('Tytul', 'Moj pierwszy post', 'dzisiaj 12:00', 'Szymek')
=======
    new Post("Title of post", "Szymek", "Content of this interesting post", "yesterday"),
    new Post("Another title", "Ptys", "Meow meow meow meow", "tomorrow"),
>>>>>>> f03162f2ca2ba5baca19da0de5df4b25c2c4dae7
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
