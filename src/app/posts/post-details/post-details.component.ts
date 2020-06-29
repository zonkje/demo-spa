import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post.model';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  id: number;

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.post = this.postService.getPost(this.id);
      }
    );
  }

  onEditPost() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeletePost(){
    this.postService.deletePost(this.id);
    this.router.navigate(['/posts'])
  }

}
