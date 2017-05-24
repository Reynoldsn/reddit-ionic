import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RedditServiceProvider } from '../../providers/reddit-service';
import { DetailsPage } from '../details/details';

/**
 * Generated class for the RedditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage {
	posts: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private redditService: RedditServiceProvider) {}

  ngOnInit() {
  	this.getPosts('all', 105); 
  }

  getPosts(category, limit) {
  	this.redditService.getPosts(category, limit).subscribe(response => {
  		this.posts = response.data.children;
  	});
  }

  viewPost(post) {
  	this.navCtrl.push(DetailsPage, {
  		post:post
  	});
  } 

}
