import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

constructor(private http: HttpClient){}

getAllPosts(): Observable<Post[]>{
  return this.http.get<Post[]>(this.apiUrl);
}

getPostById(id: number){
  return this.http.get(`${this.apiUrl}/${id}`);
}

createPost(post: any){
  return this.http.post(this.apiUrl, post);
}
updatePost(id:number, post: any){
  return this.http.put(`${this.apiUrl}/${id}`, post);
}
patchPost(id: number, post:any){
  return this.http.patch(`${this.apiUrl}/${id}`, post);
}
deletePost(id: number){
  return this.http.delete(`${this.apiUrl}/${id}`);
}

}
