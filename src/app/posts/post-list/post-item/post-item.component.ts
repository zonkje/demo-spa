import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  @Output() selectedPost = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onShowDetails(){
    this.selectedPost.emit();
  }

}
