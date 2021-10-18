import { Component, OnInit } from '@angular/core';
import { ApplicationProvider } from 'src/providers/providers';
import { Router, NavigationExtras } from '@angular/router';
import { Util } from 'src/services/util';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.page.html',
  styleUrls: ['./evaluar.page.scss'],
})
export class EvaluarPage implements OnInit {

  courses = [];
  coursesName = [];
  projects: any;
  ICourses: any = {
    header: 'Cursos',
    cssClass: 'titulo-select',
    translucent: true
  };
  usuario: string;

  constructor(
    private coreService: ApplicationProvider,
    private router: Router,
    private util: Util
  ) { }

  async ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario');
    this.projects = await this.coreService.getProjects().toPromise();
    this.coreService.getCourses().subscribe((data: any) => {
      this.courses = data;
    });
  }

  async courseChange(evt) {
    this.coursesName = [];
    let project: any;
    const id = evt.detail.value;
    project = await this.coreService.getProjectsByCourse(id).toPromise();
    this.projects.forEach(element => {
      project.forEach(element2 => {
        if (element.codigo === element2.idProyecto) {
          this.coursesName.push(element);
        }
      });
    });
  }

  projectPicked(id: number) {
    const postData = {
      idproyecto: this.coursesName[id].codigo,
      idusuario: this.usuario
    };
    this.coreService.permiteEvaluador(postData).subscribe((data: any) => {
      if (data.code === 0) {
        this.util.showAlert('Informativo', data.text, [{ text: 'Aceptar', role: 'Cancel' }]);
      } else {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            data: JSON.stringify(this.coursesName[id])
          }
        };
        this.router.navigate(['detalle-evaluar'], navigationExtras);
      }
    });
  }

}
