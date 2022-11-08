import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarFilmePage } from './criar-filme.page';

const routes: Routes = [
  {
    path: '',
    component: CriarFilmePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarFilmePageRoutingModule {}
