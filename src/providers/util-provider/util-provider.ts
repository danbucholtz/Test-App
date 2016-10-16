import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

@Injectable()
export class UtilProvider {

constructor(public loadingCtrl: LoadingController, public toastCtrl: ToastController) {}

    getLoader(content: string): any {
        let loading = this.loadingCtrl.create({
            content: content,
            duration: 3000
        });
        return loading;
    }

    getToast(message: string): any {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 2000
        });
        return toast;
    }
}
