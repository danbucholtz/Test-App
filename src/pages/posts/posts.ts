import {Component} from '@angular/core';
import {NavController, NavParams, Events} from 'ionic-angular';
import {NativeStorage} from 'ionic-native';
import {Observable} from 'rxjs/Rx';
import {PostPage} from '../post/post';
import {WpProvider} from '../../providers/wp-provider/wp-provider';
import {UtilProvider} from '../../providers/util-provider/util-provider';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  templateUrl: 'posts.html',
  // directives: [PostCmp]
})
export class PostsPage {
  // hideSearch:Boolean = true;
  // searchbar:Control = new Control();
  pageCount: number = 1;
  favoriteList = [];
  getData = true;
  // sort:string;
  noMore: Boolean = false;
  posts: any;
  //storage = new Storage(LocalStorage);
  category: any = {};
  query: {};
  constructor(public params: NavParams, public nav: NavController, public wp: WpProvider, public up: UtilProvider, public events: Events) {
    this.category = this.params.get('category');

    // Getting Favorite List
    NativeStorage.getItem('favorite')
      .then(data => {
        if (data === null) {
          data = "[]";
        }

        this.favoriteList = JSON.parse(data);
      });

    let query = this.createQuery();
    this.getPosts(query);
  }

  getPosts(query) {
    let loader = this.up.getLoader("Loading Posts...");
    // this.nav.present(loader);
loader.present();
    this.wp.getPosts(query)
      .subscribe(posts => {
        this.posts = posts;
        loader.dismiss();
      }, (error) => {
        loader.dismiss();
      });

  }

  loadMore(infinteScroll) {
    this.pageCount++;
    let query = this.createQuery();


    let toast = this.up.getToast("There are no more posts.");
    this.wp.getPosts(query)
      .subscribe(posts => {
        infinteScroll.complete();
        if (posts.length < 1) {
          this.noMore = true;
          infinteScroll.enable(!this.noMore);
          toast.present(toast);
        } else {
          this.posts = this.posts.concat(posts);
        }
      });
  }

  // toggleSearch() {
  //   this.hideSearch = !this.hideSearch;
  // }

  read(data) {
    this.nav.push(PostPage, { postData: data });
  }

  favorite(post) {
    let newPost: Boolean = true;
    let toast;
    let message: string;
    this.favoriteList.forEach(favPost => {
      if (JSON.stringify(favPost) === JSON.stringify(post)) {
        newPost = false;
      }
    });

    if (newPost) {
      this.favoriteList.push(post);
      NativeStorage.setItem('favorite', JSON.stringify(this.favoriteList));
      message = "This Post is saved in Favorite List";
    } else {
      message = "This Post is already in Favorite List";
    }
    toast = this.up.getToast(message);
    toast.present();
  }

  // openSettings() {
  //   this.nav.push(SettingsPage);
  // }

  resetSettings() {
    this.noMore = false;
    this.pageCount = 1;
  }

  createQuery() {
    let query = {};
    query['page'] = this.pageCount;
    // if(this.sort) {
    //   query['order'] = this.sort;
    // }
    // if(this.searchbar.value) {
    //   query['search'] = this.searchbar.value;
    // }
    if (this.category) {
      query['categories'] = this.category.id;
    }
    return query;
  }
}
