import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {IPosts} from '../../../interface/posts/i-posts';
import {PostsService} from '../posts/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPosts[]> {

  constructor(private postsService: PostsService, private router: Router) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPosts[]> | Promise<IPosts[]> | IPosts[] {
    return this.postsService.getPostById(this.router.getCurrentNavigation().extras.state.id);
  }
}
