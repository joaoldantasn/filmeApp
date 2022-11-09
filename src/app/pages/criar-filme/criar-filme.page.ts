/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmesService } from 'src/app/services/filmes.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-criar-filme',
  templateUrl: './criar-filme.page.html',
  styleUrls: ['./criar-filme.page.scss'],
})
export class CriarFilmePage implements OnInit {
  public formFilmes: FormGroup;

  constructor(private formBuilder: FormBuilder, private filmesService: FilmesService, private router: Router, private alertController: AlertController) {
    this.formFilmes = this.formBuilder.group({
			titulo: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
			lancamento: [null, Validators.compose([Validators.required, Validators.min(1900)])],
			sinopse: [null, Validators.compose([Validators.required, Validators.minLength(30)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
			genero: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			classificacao: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
			arrecadacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
		});
  }

  ngOnInit(): void {

  }
criarFilme(){
  this.filmesService.addFilme(this.formFilmes.value).then(()=>{
    this.usuarioValido().then(()=>{	this.router.navigate(['/listar-filmes']);
  });

  });

}



async usuarioValido(): Promise<void>{
const alert = await this.alertController.create({
  subHeader: `Operacao realizada com sucesso!`,
  buttons: ['Continuar']
});
await alert.present();
 }

}
