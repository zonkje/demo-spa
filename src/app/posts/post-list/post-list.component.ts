import { Component, OnInit } from '@angular/core';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] = [
    new Post('Tytul', 'Moj pierwszy post', 'dzisiaj 12:00', 'Szymek')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
