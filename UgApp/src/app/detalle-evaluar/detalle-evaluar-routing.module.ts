import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEvaluarPage } from './detalle-evaluar.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEvaluarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEvaluarPageRoutingModule {}
