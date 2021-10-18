import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contrasena',
    loadChildren: () => import('./contrasena/contrasena.module').then( m => m.ContrasenaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
  {
    path: 'detalle-proyecto',
    loadChildren: () => import('./detalle-proyecto/detalle-proyecto.module').then( m => m.DetalleProyectoPageModule)
  },
  {
    path: 'como-llegar',
    loadChildren: () => import('./como-llegar/como-llegar.module').then( m => m.ComoLlegarPageModule)
  },
  {
    path: 'evaluar',
    loadChildren: () => import('./evaluar/evaluar.module').then( m => m.EvaluarPageModule)
  },
  {
    path: 'detalle-evaluar',
    loadChildren: () => import('./detalle-evaluar/detalle-evaluar.module').then( m => m.DetalleEvaluarPageModule)
  },
  {
    path: 'preview',
    loadChildren: () => import('./preview/preview.module').then( m => m.PreviewPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
