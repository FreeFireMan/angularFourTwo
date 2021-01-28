import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {UsersComponent} from './components/users/users.component';
import {UserResolveService} from './components/services/resolve/user-resolve.service';
import {UserComponent} from './components/users/user/user.component';
import {UserInfoComponent} from './components/users/user-info/user-info.component';
import {PostsComponent} from './components/posts/posts.component';
import {PostsResolveService} from './components/services/resolve/posts-resolve.service';
import { PostComponent } from './components/posts/post/post.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'users', component: UsersComponent, resolve: {users: UserResolveService}, children: [
          {
            path: ':id', component: UserInfoComponent, children: [
              {
                path: 'posts', component: PostsComponent, resolve: {posts: PostsResolveService},
              }
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    UsersComponent,
    UserComponent,
    UserInfoComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
