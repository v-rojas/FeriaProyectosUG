import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicationProvider } from 'src/providers/providers';
import { Util } from 'src/services/util';
import { Events } from 'src/services/events';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  iconName: string;
  iconType: string;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private coreService: ApplicationProvider,
    private util: Util,
    private events: Events
  ) {
    this.loginForm = formBuilder.group({
      usuario: [{ value: '', disabled: false }, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[0-9]*$/)]],
      clave: [{ value: '', disabled: false }, [Validators.required]]
    });
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.iconName = 'eye-off';
    this.iconType = 'password';
  }

  getStarted() {
    this.coreService.login(this.loginForm.value).subscribe((customers: any) => {
      if (customers.code === 0) {
        this.util.showAlert('Informativo', customers.text, [{ text: 'Aceptar', role: 'Cancel' }]);
      } else {
        this.events.publishSomeData(customers);
        sessionStorage.setItem('usuario', this.loginForm.get('usuario').value);
        this.router.navigateByUrl('principal');
      }
    });
  }

  password() {
    this.router.navigateByUrl('contrasena');
  }

  register() {
    this.router.navigateByUrl('registro');
  }

  toggleIconPassword() {
    if (this.iconType === 'password') {
      this.iconType = 'text';
      this.iconName = 'eye';
    } else {
      this.iconName = 'eye-off';
      this.iconType = 'password';
    }
  }

}
