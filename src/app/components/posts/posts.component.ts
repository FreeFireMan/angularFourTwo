import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPosts} from '../../interface/posts/i-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPosts[];
  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.posts = value.posts);
  }

}
