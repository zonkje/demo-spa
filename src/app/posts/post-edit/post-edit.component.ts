import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postForm: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  onSubmit(){
    console.log(this.postForm.value);
  }

  private initForm() {
    let postTitle = '';
    let postContent = '';
    if(this.editMode) {
      postTitle = this.postService.getPost(this.id).title;
      postContent = this.postService.getPost(this.id).content;
    }

    this.postForm = new FormGroup({
      'title': new FormControl(postTitle),
      'content': new FormControl(postContent),
    });
  }

}
