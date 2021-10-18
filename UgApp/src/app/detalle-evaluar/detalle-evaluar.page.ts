import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApplicationProvider } from 'src/providers/providers';
import { Util } from 'src/services/util';

@Component({
  selector: 'app-detalle-evaluar',
  templateUrl: './detalle-evaluar.page.html',
  styleUrls: ['./detalle-evaluar.page.scss'],
})
export class DetalleEvaluarPage implements OnInit {

  options = ['Dominio del tema', 'Creatividad', 'Presentación grupal', 'Decoración', 'Recursos'];
  projectData: any;
  teachers: any;
  subjects: any;
  teacherName: string;
  subjectName: string;
  usuario: any;

  starD1 = 'star-outline'; starD2 = 'star-outline'; starD3 = 'star-outline'; starD4 = 'star-outline'; starD5 = 'star-outline';
  starC1 = 'star-outline'; starC2 = 'star-outline'; starC3 = 'star-outline'; starC4 = 'star-outline'; starC5 = 'star-outline';
  starP1 = 'star-outline'; starP2 = 'star-outline'; starP3 = 'star-outline'; starP4 = 'star-outline'; starP5 = 'star-outline';
  starDec1 = 'star-outline'; starDec2 = 'star-outline'; starDec3 = 'star-outline'; starDec4 = 'star-outline'; starDec5 = 'star-outline';
  starR1 = 'star-outline'; starR2 = 'star-outline'; starR3 = 'star-outline'; starR4 = 'star-outline'; starR5 = 'star-outline';

  rateD: number; rateC: number; rateP: number; rateDec: number; rateR: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private coreService: ApplicationProvider,
    private util: Util
  ) { }

  ngOnInit() {
    this.usuario = sessionStorage.getItem('usuario');
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


  register() {
    this.coreService.calificacionEvaluador({
      idproyecto: this.projectData.codigo,
      dominio: this.rateD,
      creatividad: this.rateC,
      presentacion: this.rateP,
      decoracion: this.rateDec,
      recursos: this.rateR,
      idusuario: this.usuario,
      evalusuario: 0,
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

  goBack() {
    this.router.navigateByUrl('evaluar');
  }

  starToggleD(id: number) {
    switch (id) {
      case 1:
        this.cleanRateD();
        this.starD1 = 'star';
        this.rateD = 1;
        break;
      case 2:
        this.cleanRateD();
        this.starD1 = 'star';
        this.starD2 = 'star';
        this.rateD = 2;
        break;
      case 3:
        this.cleanRateD();
        this.starD1 = 'star';
        this.starD2 = 'star';
        this.starD3 = 'star';
        this.rateD = 3;
        break;
      case 4:
        this.cleanRateD();
        this.starD1 = 'star';
        this.starD2 = 'star';
        this.starD3 = 'star';
        this.starD4 = 'star';
        this.rateD = 4;
        break;
      case 5:
        this.cleanRateD();
        this.starD1 = 'star';
        this.starD2 = 'star';
        this.starD3 = 'star';
        this.starD4 = 'star';
        this.starD5 = 'star';
        this.rateD = 5;
        break;
      default:
        break;
    }
  }
  cleanRateD() {
    this.starD1 = 'star-outline';
    this.starD2 = 'star-outline';
    this.starD3 = 'star-outline';
    this.starD4 = 'star-outline';
    this.starD5 = 'star-outline';
  }

  starToggleC(id: number) {
    switch (id) {
      case 1:
        this.cleanRateC();
        this.starC1 = 'star';
        this.rateC = 1;
        break;
      case 2:
        this.cleanRateC();
        this.starC1 = 'star';
        this.starC2 = 'star';
        this.rateC = 2;
        break;
      case 3:
        this.cleanRateC();
        this.starC1 = 'star';
        this.starC2 = 'star';
        this.starC3 = 'star';
        this.rateC = 3;
        break;
      case 4:
        this.cleanRateC();
        this.starC1 = 'star';
        this.starC2 = 'star';
        this.starC3 = 'star';
        this.starC4 = 'star';
        this.rateC = 4;
        break;
      case 5:
        this.cleanRateC();
        this.starC1 = 'star';
        this.starC2 = 'star';
        this.starC3 = 'star';
        this.starC4 = 'star';
        this.starC5 = 'star';
        this.rateC = 5;
        break;
      default:
        break;
    }
  }
  cleanRateC() {
    this.starC1 = 'star-outline';
    this.starC2 = 'star-outline';
    this.starC3 = 'star-outline';
    this.starC4 = 'star-outline';
    this.starC5 = 'star-outline';
  }

  starToggleP(id: number) {
    switch (id) {
      case 1:
        this.cleanRateP();
        this.starP1 = 'star';
        this.rateP = 1;
        break;
      case 2:
        this.cleanRateP();
        this.starP1 = 'star';
        this.starP2 = 'star';
        this.rateP = 2;
        break;
      case 3:
        this.cleanRateP();
        this.starP1 = 'star';
        this.starP2 = 'star';
        this.starP3 = 'star';
        this.rateP = 3;
        break;
      case 4:
        this.cleanRateP();
        this.starP1 = 'star';
        this.starP2 = 'star';
        this.starP3 = 'star';
        this.starP4 = 'star';
        this.rateP = 4;
        break;
      case 5:
        this.cleanRateP();
        this.starP1 = 'star';
        this.starP2 = 'star';
        this.starP3 = 'star';
        this.starP4 = 'star';
        this.starP5 = 'star';
        this.rateP = 5;
        break;
      default:
        break;
    }
  }
  cleanRateP() {
    this.starP1 = 'star-outline';
    this.starP2 = 'star-outline';
    this.starP3 = 'star-outline';
    this.starP4 = 'star-outline';
    this.starP5 = 'star-outline';
  }

  starToggleDec(id: number) {
    switch (id) {
      case 1:
        this.cleanRateDec();
        this.starDec1 = 'star';
        this.rateDec = 1;
        break;
      case 2:
        this.cleanRateDec();
        this.starDec1 = 'star';
        this.starDec2 = 'star';
        this.rateDec = 2;
        break;
      case 3:
        this.cleanRateDec();
        this.starDec1 = 'star';
        this.starDec2 = 'star';
        this.starDec3 = 'star';
        this.rateDec = 3;
        break;
      case 4:
        this.cleanRateDec();
        this.starDec1 = 'star';
        this.starDec2 = 'star';
        this.starDec3 = 'star';
        this.starDec4 = 'star';
        this.rateDec = 4;
        break;
      case 5:
        this.cleanRateDec();
        this.starDec1 = 'star';
        this.starDec2 = 'star';
        this.starDec3 = 'star';
        this.starDec4 = 'star';
        this.starDec5 = 'star';
        this.rateDec = 5;
        break;
      default:
        break;
    }
  }
  cleanRateDec() {
    this.starDec1 = 'star-outline';
    this.starDec2 = 'star-outline';
    this.starDec3 = 'star-outline';
    this.starDec4 = 'star-outline';
    this.starDec5 = 'star-outline';
  }

  starToggleR(id: number) {
    switch (id) {
      case 1:
        this.cleanRateR();
        this.starR1 = 'star';
        this.rateR = 1;
        break;
      case 2:
        this.cleanRateR();
        this.starR1 = 'star';
        this.starR2 = 'star';
        this.rateR = 2;
        break;
      case 3:
        this.cleanRateR();
        this.starR1 = 'star';
        this.starR2 = 'star';
        this.starR3 = 'star';
        this.rateR = 3;
        break;
      case 4:
        this.cleanRateR();
        this.starR1 = 'star';
        this.starR2 = 'star';
        this.starR3 = 'star';
        this.starR4 = 'star';
        this.rateR = 4;
        break;
      case 5:
        this.cleanRateR();
        this.starR1 = 'star';
        this.starR2 = 'star';
        this.starR3 = 'star';
        this.starR4 = 'star';
        this.starR5 = 'star';
        this.rateR = 5;
        break;
      default:
        break;
    }
  }
  cleanRateR() {
    this.starR1 = 'star-outline';
    this.starR2 = 'star-outline';
    this.starR3 = 'star-outline';
    this.starR4 = 'star-outline';
    this.starR5 = 'star-outline';
  }
}
