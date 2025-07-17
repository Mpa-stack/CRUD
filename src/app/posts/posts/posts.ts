import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,RouterModule,],
  templateUrl: './posts.html',
  styleUrls: ['./posts.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

    ngOnInit(): void {
    this.postService.getAllPosts().subscribe((data) => {
      this.posts = data;
    });
  }

}
