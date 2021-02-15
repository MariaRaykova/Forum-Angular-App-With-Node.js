import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPost } from '../shared/interfaces/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  loadPost(limit: number): Observable<IPost[]> {
   return this.http.get<IPost[]>(
     `/posts${limit ? `?limit=${limit}` : ''}`
     );
  }
}
