import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarFilmesPage } from './listar-filmes.page';

const routes: Routes = [
  {
    path: '',
    component: ListarFilmesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarFilmesPageRoutingModule {}
