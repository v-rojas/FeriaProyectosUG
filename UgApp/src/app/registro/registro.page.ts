import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from 'src/custom-validations/password';
import { ApplicationProvider } from 'src/providers/providers';
import { Util } from 'src/services/util';
import { Events } from 'src/services/events';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registerForm: FormGroup;
  ISexOption: any = {
    header: 'Sexo',
    cssClass: 'titulo-select',
    translucent: true
  };

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coreService: ApplicationProvider,
    private util: Util,
    private events: Events
  ) {
    this.registerForm = formBuilder.group({
      cedula: [{ value: '', disabled: false }, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10)]],
      nombres: [{ value: '', disabled: false }, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      apellidos: [{ value: '', disabled: false }, [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      sexo: [{ value: '', disabled: false }, [Validators.required]],
      clave1: [{ value: '', disabled: false }, [Validators.required]],
      clave2: [{ value: '', disabled: false }],
      correo: [{ value: '', disabled: false }, [Validators.required, Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]]
    }, { validator: passwordValidator });
  }

  ngOnInit() {
  }

  register() {
    this.coreService.doRegister(this.registerForm.value).subscribe((data: any) => {
      if (data[0].code === 1) {
        this.events.publishSomeData(data);
        this.util.showAlert('', data[0].text, [
          {
            text: 'Continuar',
            handler: () => {
              this.router.navigateByUrl('principal');
            }
          }
        ]);
      }
    });
  }

  goBack() {
    this.router.navigateByUrl('login');
  }
}
