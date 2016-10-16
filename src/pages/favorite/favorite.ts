import {Component} from '@angular/core';
import { NavController} from 'ionic-angular';
import {NativeStorage} from 'ionic-native';
import {PostPage} from '../post/post';

@Component({
    templateUrl: 'favorite.html'
})
export class FavoritePage {
    favoriteList = [];
    //storage = new Storage(LocalStorage);
    constructor(public nav: NavController) { }

    ionViewWillEnter() {
        NativeStorage.getItem('favorite')
            .then(data => {
                if (data !== null) {
                    this.favoriteList = JSON.parse(data);
                }
            });
    }

    read(post) {
        this.nav.push(PostPage, { postData: post, images: post.images });
    }

    removeFavorite(index) {
        this.favoriteList.splice(index, 1);
        NativeStorage.setItem('favorite', this.favoriteList);
    }
}