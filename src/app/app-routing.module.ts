import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /**path: indica o caminho
    *pathMatch: diz ao router como juntar a URL
  */
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  /**Utilizando lazy loading
    * loadChildren: carregar o módulo filho de forma automática
    * .then: indica qual o módulo para carregar
  */
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
