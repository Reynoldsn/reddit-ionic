import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RedditServiceProvider {
	http: any;
	baseUrl: string;

  constructor(http: Http) {
  	this.http = http;
  	this.baseUrl = 'https://www.reddit.com/r';
  }

  getPosts(category, limit) {
  	return this.http.get(this.baseUrl + '/' + category + '/top.json?limit=' + limit)
  		.map(resp => resp.json());
  }

}
