import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
// import {HtmlPipe} from '../../pipes/htmlPipe';
// import {TimeAgoPipe} from 'angular2-moment'; 
// import {MomentModule} from 'angular2-moment';

@Component({
  templateUrl: 'post.html',
  // pipes: [HtmlPipe,TimeAgoPipe]
})
export class PostPage {
  postData:any;
  constructor(public nav:NavController, public params: NavParams) {
    this.postData = this.params.get('postData');     
  }
}
