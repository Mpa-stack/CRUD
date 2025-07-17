import { PostService } from './../../services/post';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-detail.html',
  styleUrl: './post-detail.css'
})
export class PostDetail implements OnInit{
  post: any ={};
  id!: number;

constructor(private route:ActivatedRoute, private router: Router, private postService: PostService){}

  ngOnInit():void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.postService.getPostById(this.id).subscribe((res: any) => this.post = res);
  }

  updateFullPost(){
    this.postService.updatePost(this.id, this.post).subscribe(() => alert('Post Fully updated'));
  }

  patchPost(){
    this.postService.patchPost(this.id, { title:this.post.title}).subscribe(() => alert('Post Title Patched'));
  }

  deletePost(){
    this.postService.deletePost(this.id).subscribe(() => {
      alert('post Deleted');
      this.router.navigate(['/posts']);
    });
  }
}
