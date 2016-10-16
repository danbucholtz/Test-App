
import {ViewChild, Component} from '@angular/core';
import {Platform, Nav } from 'ionic-angular';
import {StatusBar, Network, GoogleAnalytics, AdMob, OneSignal} from 'ionic-native';
import {TabsPage} from '../pages/tabs/tabs';
// import {CategoryListPage} from '../pages/category-list/category-list';
// import {WpProvider} from '../providers/wp-provider/wp-provider';
// import {PushProvider} from '../providers/push-provider/push-provider';
import {UtilProvider} from '../providers/util-provider/util-provider';
import {GOOGLE_ANALYTICS_ID} from '../providers/constants';

@Component({
  selector : 'ion-app',
  templateUrl: 'app.html',
})
export class CaptionApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TabsPage;
  //storage: Storage = new Storage(LocalStorage);
  settings = {};

  constructor(private platform: Platform, public up: UtilProvider) {
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      let toast = this.up.getToast("You are not connected to Internet.");
      Network.onDisconnect().subscribe(() => {
        toast.present(toast);
      });

      GoogleAnalytics.startTrackerWithId(GOOGLE_ANALYTICS_ID);

      StatusBar.styleDefault();

      this.platform.ready().then(() => {
        if (AdMob) {
          AdMob.createBanner({
            adId: 'ca-app-pub-6169180280024726/1834590891',
            autoShow: false
          });

          OneSignal.startInit('857514b7-9a03-4fe3-8dc8-76158e77471f', '87102734183');

         OneSignal.inFocusDisplaying(OneSignal.OSInFocusDisplayOption.InAppAlert);

          OneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
          });

          OneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
          });

          OneSignal.endInit();

        }
      });

    });
  }
}

// ionicBootstrap(MyApp, [WpProvider, UtilProvider], {
//   mode: 'md',
//   tabsPlacement: 'top'
// })
