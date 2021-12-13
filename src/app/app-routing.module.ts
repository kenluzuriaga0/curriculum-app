import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'info',
    pathMatch: 'full'
  },
  {
    path: 'experiencia',
    loadChildren: () => import('./experiencia/experiencia.module').then( m => m.ExperienciaPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'educacion',
    loadChildren: () => import('./educacion/educacion.module').then( m => m.EducacionPageModule)
  },
  {
    path: 'skills',
    loadChildren: () => import('./skills/skills.module').then( m => m.SkillsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
