import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleProyectoPageRoutingModule } from './detalle-proyecto-routing.module';

import { DetalleProyectoPage } from './detalle-proyecto.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleProyectoPageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [DetalleProyectoPage]
})
export class DetalleProyectoPageModule {}
