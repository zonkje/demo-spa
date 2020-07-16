import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../post.service';
import {Post} from '../post.model';
import {NewPost} from '../new-post.model';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postForm: FormGroup;
  id: number;
  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private postService: PostService, private router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  onSubmit() {
    const newPost = new NewPost(
      this.postForm.value['title'],
      this.postForm.value['content'],
    );
    if (this.editMode) {
      this.postService.updatePost(this.id, newPost);
    } else {
      this.postService.addPost(newPost);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let postTitle = '';
    let postContent = '';
    if (this.editMode) {
      postTitle = this.postService.getPost(this.id).title;
      postContent = this.postService.getPost(this.id).content;
    }

    this.postForm = new FormGroup({
      'title': new FormControl(postTitle, Validators.required),
      'content': new FormControl(postContent, Validators.required),
    });
  }

}
