import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }

  onNewPost() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
