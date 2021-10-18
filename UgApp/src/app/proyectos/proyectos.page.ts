import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ApplicationProvider } from 'src/providers/providers';
import { Util } from 'src/services/util';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.page.html',
  styleUrls: ['./proyectos.page.scss'],
})
export class ProyectosPage implements OnInit {

  items: any;
  category: string;
  usuario: string;

  constructor(
    private router: Router,
    private coreService: ApplicationProvider,
    private http: HttpClient,
    private util: Util
  ) { }

  ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario');
    this.items = [];
  }

  ionViewWillEnter() { }

  goList(id: string) {
    if (id === 'C') {
      this.category = 'Creatividad';
    } else {
      this.category = 'Demostración';
    }
    this.coreService.getProjectsByCategory(id).subscribe((data) => {
      this.items = data;
    });
  }

  goPreview(id: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.items[id])
      }
    };
    this.router.navigate(['preview'], navigationExtras);
  }

  goProject(id: number) {
    const postData = {
      idproyecto: this.items[id].codigo,
      idusuario: this.usuario
    };
    this.coreService.permiteEvaluador(postData).subscribe((data: any) => {
      if (data.code === 0) {
        this.util.showAlert('Informativo', data.text, [{ text: 'Aceptar', role: 'Cancel' }]);
      } else {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(this.items[id])
          }
        };
        this.router.navigate(['detalle-proyecto'], navigationExtras);
      }
    });
  }

  goLocation(id: number) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        data: JSON.stringify(this.items[id])
      }
    };
    this.router.navigate(['como-llegar'], navigationExtras);
  }

  regresar() {
    this.items = [];
  }
}
