import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_CONFIG, AppConfig } from '../api.config';

@Component({
  selector: 'app-four-g',
  templateUrl: './four-g.component.html',
  styleUrls: ['./four-g.component.css']
})
export class FourGComponent implements OnInit {

  page = 1;
  posts: any;
  tempPosts: any;

  length = 5;
  apiEndpoint = '';

  constructor(@Inject(APP_CONFIG) config: AppConfig, private http: HttpClient) {
    this.apiEndpoint = config.apiEndpoint;
   }

  ngOnInit() {
    return this.http.get(this.apiEndpoint + '/lte').subscribe(
      (response) => {
        this.tempPosts = response;
        this.page = 1;
        console.log(response);
        this.PostSNavigation();
      },
      (error) => console.log(error)
    );
  }

  PostSNavigation() {
    console.log(this.page);
    this.posts = [];

    let max_limit: number = this.tempPosts.length;

    if ((this.length * this.page) < max_limit) {
      max_limit = this.length * this.page;
    }

    for (let i = (( this.page - 1 ) * this.length); i < max_limit; i++)                   {
      this.posts.push(this.tempPosts[i]);
    }

  }

}
