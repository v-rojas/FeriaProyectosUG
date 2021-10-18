import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationProvider } from 'src/providers/providers';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.page.html',
  styleUrls: ['./preview.page.scss'],
})
export class PreviewPage implements OnInit {

  projectData: any;
  teacherName: string;
  subjectName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: ApplicationProvider
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.projectData = JSON.parse(params.data);
        this.coreService.getTeachers().subscribe((data: any) => {
          data.forEach(element => {
            if (this.projectData.iddocente.toString() === element.iddocente.toString()) {
              this.teacherName = element.nombres + ' ' + element.apellidos;
            }
          });
        });

        this.coreService.getSubjects().subscribe((data: any) => {
          data.forEach(element => {
            if (this.projectData.idmateria === element.idMateria) {
              this.subjectName = element.nombre;
            }
          });
        });
      }
    });
  }

  regresarProyectos() {
    this.router.navigateByUrl('proyectos');
  }
}
