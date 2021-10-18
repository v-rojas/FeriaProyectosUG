import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationProvider } from 'src/providers/providers';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Util } from 'src/services/util';

@Component({
  selector: 'app-detalle-proyecto',
  templateUrl: './detalle-proyecto.page.html',
  styleUrls: ['./detalle-proyecto.page.scss'],
})
export class DetalleProyectoPage implements OnInit {

  teachers: any;
  subjects: any;
  projectData: any;
  showRateContainer = true;
  teacherName: string;
  subjectName: string;
  star1 = 'star-outline'; star2 = 'star-outline'; star3 = 'star-outline'; star4 = 'star-outline'; star5 = 'star-outline';
  rateValue: number;
  qrmessage = '';
  usuario: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: ApplicationProvider,
    private barcode: BarcodeScanner,
    private util: Util
  ) {

  }

  ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario');
    this.route.queryParams.subscribe(params => {
      if (params && params.data) {
        this.projectData = JSON.parse(params.data);
      }
    });

    this.coreService.getTeachers().subscribe((data) => {
      this.teachers = data;
    });

    this.coreService.getSubjects().subscribe((data) => {
      this.subjects = data;
    });
  }

  ionViewWillEnter() {

  }

  scanCode() {
    this.qrmessage = '';
    this.barcode.scan().then(barcodeData => {
      if (this.projectData.codigoProy === barcodeData.text) {
        this.rate();
      } else {
        this.qrmessage = 'El código QR escaneado no se encuentra registrado';
      }
    });
  }

  rate() {
    this.showRateContainer = !this.showRateContainer;
    for (let index = 0; index < this.teachers.length; index++) {
      if (this.projectData.iddocente === this.teachers[index].codigo) {
        this.teacherName = this.teachers[index].nombres + ' ' + this.teachers[index].apellidos;
      }
    }
    for (let index = 0; index < this.subjects.length; index++) {
      if (this.projectData.idmateria === this.subjects[index].idMateria) {
        this.subjectName = this.subjects[index].nombre;
      }
    }
  }

  starToggle(id: number) {
    switch (id) {
      case 1:
        this.cleanRate();
        this.star1 = 'star';
        this.rateValue = 1;
        break;
      case 2:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.rateValue = 2;
        break;
      case 3:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.rateValue = 3;
        break;
      case 4:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.star4 = 'star';
        this.rateValue = 4;
        break;
      case 5:
        this.cleanRate();
        this.star1 = 'star';
        this.star2 = 'star';
        this.star3 = 'star';
        this.star4 = 'star';
        this.star5 = 'star';
        this.rateValue = 5;
        break;
      default:
        break;
    }
  }

  cleanRate() {
    this.star1 = 'star-outline';
    this.star2 = 'star-outline';
    this.star3 = 'star-outline';
    this.star4 = 'star-outline';
    this.star5 = 'star-outline';
  }

  saveRate() {
    this.coreService.calificacionEvaluador({
      idproyecto: this.projectData.codigo,
      dominio: 0,
      creatividad: 0,
      presentacion: 0,
      decoracion: 0,
      recursos: 0,
      idusuario: this.usuario,
      evalusuario: this.rateValue,
      visitausuario: 1
    }).subscribe((data: any) => {
      this.util.showAlert('Gracias por evaluar', 'Su calificación ha sido registrada con éxito', [
        {
          text: 'Aceptar',
          handler: () => {
            this.router.navigateByUrl('principal');
          }
        }
      ]);
    });
  }

  regresarProyectos() {
    this.router.navigateByUrl('proyectos');
  }
}
