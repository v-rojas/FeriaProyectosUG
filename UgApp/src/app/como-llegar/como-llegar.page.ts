import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationProvider, EndpointProvider } from 'src/providers/providers';

@Component({
  selector: 'app-como-llegar',
  templateUrl: './como-llegar.page.html',
  styleUrls: ['./como-llegar.page.scss'],
})
export class ComoLlegarPage implements OnInit {

  buttonText: string;
  showImage: boolean;
  imgPath: string;
  projectData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: ApplicationProvider,
    private endpoint: EndpointProvider
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.projectData = JSON.parse(params.data);
        this.coreService.getAulaProyecto(this.projectData.codigo).subscribe((data: any) => {
          this.imgPath = this.endpoint.apiUrl + '/aula' + data[0].idcurso + '.gif';
        });
      }
    });
  }

  ionViewWillEnter() {
    this.buttonText = 'Empezar';
    this.showImage = true;
  }

  getStarted() {
    if (this.buttonText === 'Salir') {
      this.router.navigateByUrl('proyectos');
      return;
    }
    this.buttonText = 'Salir';
    this.showImage = false;
  }

}
