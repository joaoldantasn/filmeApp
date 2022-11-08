import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarFilmePageRoutingModule } from './editar-filme-routing.module';

import { EditarFilmePage } from './editar-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditarFilmePageRoutingModule
  ],
  declarations: [EditarFilmePage]
})
export class EditarFilmePageModule {}
