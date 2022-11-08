import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarFilmePageRoutingModule } from './criar-filme-routing.module';

import { CriarFilmePage } from './criar-filme.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CriarFilmePageRoutingModule
  ],
  declarations: [CriarFilmePage]
})
export class CriarFilmePageModule {}
