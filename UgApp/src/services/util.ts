import { Injectable } from '@angular/core';
import { LoadingController, ModalController, AlertController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})

export class Util {

    isLoading = false;

    constructor(
        public loadingController: LoadingController,
        private modalCtrl: ModalController,
        public alertController: AlertController) { }

    async showAlert(header, message, buttons: any[]) {
        const alert = await this.alertController.create({
            header,
            message,
            cssClass: 'titulo-select',
            buttons
        });
        await alert.present();
    }

    async showProgress(msg: string) {
        this.isLoading = true;
        return await this.loadingController.create({
            message: msg,
            cssClass: 'custom-loader-class',
            duration: 1300000,
            spinner: 'crescent'
        }).then(a => {
            a.present().then(() => {
                if (!this.isLoading) {
                    a.dismiss();
                }
            });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss();
    }

    currentDate() {
        const dateObj = new Date();
        const month = this.fillzero(2, dateObj.getMonth() + 1);
        const day = this.fillzero(2, dateObj.getDate());
        const year = this.fillzero(4, dateObj.getFullYear());
        const newDate = year + '-' + month + '-' + day;
        return newDate;
    }

    addDaysToActualDate(date: any, days: any) {
        const dateObj = new Date(date.split('-').join('/'));
        dateObj.setDate(dateObj.getDate() + days);
        const month = this.fillzero(2, dateObj.getMonth() + 1);
        const day = this.fillzero(2, dateObj.getDate());
        const year = this.fillzero(4, dateObj.getFullYear());
        const newDate = year + '-' + month + '-' + day;
        return newDate;
    }

    // This function add a 0 in two digits
    // Use: yy/mm/dd 
    // Example: When day is 6 then add 0, result <06>
    fillzero(size: number, numero: number) {
        let s = String(numero);
        while (s.length < (size || 2)) { s = '0' + s; }
        return s;
    }

    validateCI(ced) {
        let total = 0;
        const length = 10;
        const longcheck = length - 1;
        if (ced !== '' && length === 10) {
            for (let i = 0; i < longcheck; i++) {
                if (i % 2 === 0) {
                    const char = ced.charAt(i);
                    let aux = +char * 2;
                    if (aux > 9) { aux -= 9; }
                    total += aux;
                } else {
                    // tslint:disable-next-line: radix
                    total += parseInt(ced.charAt(i));
                }
            }
            total = total % 10 ? 10 - total % 10 : 0;
            if (+(ced.charAt(length - 1)) === total) {
                return true;
            }
            return false;
        }
    }
}
