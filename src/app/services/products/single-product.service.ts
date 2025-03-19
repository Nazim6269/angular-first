import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../../../comment.interface';

@Injectable({ providedIn: 'root' })
export class SingleProductService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private http: HttpClient) {}

  getSingeProduct(productId: string): Observable<Comment> {
    return this.http.get<Comment>(`${this.baseUrl}/${productId}`);
  }
}
