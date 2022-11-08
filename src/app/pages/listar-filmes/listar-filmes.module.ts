import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarFilmesPageRoutingModule } from './listar-filmes-routing.module';

import { ListarFilmesPage } from './listar-filmes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarFilmesPageRoutingModule
  ],
  declarations: [ListarFilmesPage]
})
export class ListarFilmesPageModule {}
