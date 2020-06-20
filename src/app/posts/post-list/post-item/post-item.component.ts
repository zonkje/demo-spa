import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../post.model';
import {PostService} from '../../post.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;

  ngOnInit(): void {
  }

}
