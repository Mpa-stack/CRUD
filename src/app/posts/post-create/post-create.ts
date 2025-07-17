import { Component } from '@angular/core';
import { PostService } from '../../services/post';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-post-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-create.html',
  styleUrl: './post-create.css'
})
export class PostCreate {

title ='';
body ='';
userId = 1;

constructor(private postService: PostService, private router : Router) {}

createPost(){
  const newPost = { title: this.title, body: this.body, userId: this.userId};
  this.postService.createPost(newPost).subscribe(()=>{
    alert('Post Created!');
    this.router.navigate(['/posts']);
  });
}

}
