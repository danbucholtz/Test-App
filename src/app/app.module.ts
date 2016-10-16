import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { CaptionApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { PostPage } from '../pages/post/post';
import { FavoritePage } from '../pages/favorite/favorite';
import { CategoryListPage } from '../pages/category-list/category-list';
import { TabsPage } from '../pages/tabs/tabs';
// import { SettingsPage } from '../pages/settings/settings';
import { WpPage } from '../pages/wp-page/wp-page';
import { WpPageList } from '../pages/wp-page-list/wp-page-list';
import { WpProvider } from '../providers/wp-provider/wp-provider';
// import { PushProvider } from '../providers/push-provider/push-provider';
import { UtilProvider } from '../providers/util-provider/util-provider';
import { PostCmp } from '../components/post/post';
import { MomentModule } from 'angular2-moment';
// import {HtmlPipe} from '../pipes/htmlPipe';


@NgModule({
  declarations: [
    CaptionApp,
    PostsPage,
    PostPage,
    FavoritePage,
    CategoryListPage,
    TabsPage,
    WpPage,
    WpPageList,
    PostCmp
  ],
  imports: [
    IonicModule.forRoot(CaptionApp, {
      mode: 'md',
      tabsPlacement: 'top',
      pageTransition: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    }),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CaptionApp,
    PostCmp,
    PostsPage,
    PostPage,
    FavoritePage,
    CategoryListPage,
    TabsPage,
    WpPage,
    WpPageList
  ],
  providers: [WpProvider, UtilProvider]
})
export class MyApp { }
