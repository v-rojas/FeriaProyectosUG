import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEvaluarPageRoutingModule } from './detalle-evaluar-routing.module';

import { DetalleEvaluarPage } from './detalle-evaluar.page';
import { ComponentesModule } from 'src/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesModule,
    DetalleEvaluarPageRoutingModule
  ],
  declarations: [DetalleEvaluarPage]
})
export class DetalleEvaluarPageModule {}
