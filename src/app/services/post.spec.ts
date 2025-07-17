import { TestBed } from '@angular/core/testing';
import { Post } from '../models/post.model';

describe('Post', () => {
  let service: Post;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Post);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
