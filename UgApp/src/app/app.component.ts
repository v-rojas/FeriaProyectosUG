import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events } from 'src/services/events';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/principal',
      icon: 'home-outline'
    },
    {
      title: 'Proyectos',
      url: '/proyectos',
      icon: 'school-outline'
    },
    {
      title: 'Cerrar sesión',
      url: '/login',
      icon: 'log-out-outline'
    }
  ];
  userName: string;
  email: string;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private events: Events
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#0c2d66');
      this.splashScreen.hide();
    });
    this.events.getObservable().subscribe((data) => {
      this.setMenuData(data);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  setMenuData(data: any) {
    this.userName = data[0].nombres + ' ' + data[0].apellidos;
    this.email = data[0].correo;
    if (data[0].perfil === 5) {
      this.appPages[1].title = 'Evaluar';
      this.appPages[1].url = '/evaluar';
      this.appPages[1].icon = 'star-outline';
    } else if (data[0].perfil === 2 || data[0].perfil === 3 || data[0].perfil === 4) {
      this.appPages[1].title = 'Proyectos';
      this.appPages[1].url = '/proyectos';
      this.appPages[1].icon = 'school-outline';
    }
  }
}
