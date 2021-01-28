import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPosts} from '../../../interface/posts/i-posts';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPostById(id): Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
