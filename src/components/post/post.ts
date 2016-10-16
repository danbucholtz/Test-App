import {Component, Input, Output, EventEmitter} from '@angular/core';
import {GoogleAnalytics,SocialSharing} from 'ionic-native';
// import {HtmlPipe} from '../../pipes/htmlPipe';
import {WpProvider} from '../../providers/wp-provider/wp-provider';
// import {TimeAgoPipe} from 'angular2-moment';
// import {MomentModule} from 'angular2-moment';

@Component({
    selector: 'post',
    templateUrl: 'post.html',
    // pipes: [TimeAgoPipe]
})

export class PostCmp {
    @Input() postData;
    @Output() read = new EventEmitter();
    @Output() favorite = new EventEmitter();

    favoriteList = [];
    constructor(public wp: WpProvider) {
    }

    ngOnInit() {
    }

    readBtn() {
        GoogleAnalytics.trackView(this.postData.link);
        this.read.emit({ post: this.postData, images: this.postData.better_featured_image });
    }

    favoriteBtn() {
        this.favorite.emit({ post: this.postData, images: this.postData.better_featured_image });
    }

    shareBtn() {
        let title = this.postData.title.rendered;
        let message = `Read this post on ${title}.`;
        let url = this.postData.link;

        SocialSharing.share(message, "Read this post", null, url);
    }


}