import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Util } from 'src/services/util';
import { ApplicationProvider } from 'src/providers/providers';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contrasena',
  templateUrl: './contrasena.page.html',
  styleUrls: ['./contrasena.page.scss'],
})
export class ContrasenaPage implements OnInit {

  emailForm: FormGroup;

  constructor(
    private router: Router,
    private util: Util,
    private coreService: ApplicationProvider,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.emailForm = this.formBuilder.group({
      cedula: [{ value: '', disabled: false }, [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10)]],
    });
  }

  ionViewDidLeave() {
    this.emailForm.reset();
  }

  goBack() {
    this.router.navigateByUrl('login');
  }

  sendEmail() {
    const cedula = this.emailForm.get('cedula').value;
    this.coreService.sendEmail({ cedula }).subscribe((data: any) => {
      if (data.code === 0) {
        this.util.showAlert('', data.text, [
          {
            text: 'Aceptar',
            handler: () => { }
          }
        ]);
      } else if (data.code === 1) {
        this.util.showAlert('', data.text, [
          {
            text: 'Aceptar',
            handler: () => {
              this.router.navigateByUrl('login');
            }
          }
        ]);
      }
    });
  }

}
