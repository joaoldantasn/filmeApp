/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FilmesService } from 'src/app/services/filmes.service';

export interface Filme {
  id: number;
  titulo: string;
  lancamento: string;
  sinopse: string;
  genero: string;
  foto: string;
  classificacao: string;
  arrecadacao: string;
}

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.page.html',
  styleUrls: ['./editar-filme.page.scss'],
})
export class EditarFilmePage implements OnInit {

  public formFilmes: FormGroup;
  public userId: number;
	public filme: Filme;

  constructor(private route: ActivatedRoute,
		private formBuilder: FormBuilder, private filmesService: FilmesService, private router: Router, private alertController: AlertController) { }

  ngOnInit(): void {
    this.formFilmes = this.formBuilder.group({
			titulo: [null, Validators.compose([Validators.required, Validators.minLength(7)])],
			lancamento: [null, Validators.compose([Validators.required, Validators.min(1900)])],
			sinopse: [null, Validators.compose([Validators.required, Validators.minLength(30)])],
			foto: [null, Validators.compose([Validators.required, Validators.minLength(10)])],
			genero: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
			classificacao: [null, Validators.compose([Validators.required, Validators.minLength(1)])],
			arrecadacao: [null, Validators.compose([Validators.required, Validators.minLength(3)])],

		});
		this.userId = this.route.snapshot.params.id;
		this.filmesService.getFilme(this.userId).subscribe(response => {
			this.filme = response;

			this.formFilmes = this.formBuilder.group({
				titulo: [this.filme.titulo, Validators.compose([Validators.required, Validators.minLength(7)])],
				lancamento: [this.filme.lancamento, Validators.compose([Validators.required, Validators.min(1900)])],
				sinopse: [this.filme.sinopse, Validators.compose([Validators.required, Validators.minLength(30)])],
				foto: [this.filme.foto, Validators.compose([Validators.required, Validators.minLength(10)])],
				genero: [this.filme.genero, Validators.compose([Validators.required, Validators.minLength(3)])],
				classificacao: [this.filme.classificacao, Validators.compose([Validators.required, Validators.minLength(1)])],
				arrecadacao: [this.filme.arrecadacao, Validators.compose([Validators.required, Validators.minLength(3)])],

			});
		});
    }

	criarFilme(){
		console.log(this.formFilmes.value);
		this.filmesService.updateFilme(this.userId, this.formFilmes.value).then(()=>{
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


