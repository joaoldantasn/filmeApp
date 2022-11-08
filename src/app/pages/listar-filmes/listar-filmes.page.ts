import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.page.html',
  styleUrls: ['./listar-filmes.page.scss'],
})
export class ListarFilmesPage implements OnInit {
  filmes = new Array<Filme>();

  constructor(private filmesService: FilmesService, private alertController: AlertController, private rota: Router) {
  };

  ngOnInit() {
    this.filmesService.getFilmes().subscribe(response => {
      console.log(response);
      this.filmes = response;
    });
  }

  excluirFilme(id){
    this.filmesService.deleteFilme(id).then(() =>{

      this.filmesService.getFilmes().subscribe(response => (this.filmes = response));
      this.alertController.create({
        subHeader: `Operacao realizada com sucesso!`,
        buttons: [
          {
            text: 'Continuar',
            handler: () => {
            }
          }
        ]
      }).then(res => {
        res.present();
      });

    });
  }

  async showConfirm(id: number, titulo: string) {
    this.alertController.create({
      subHeader: `Você está prestes a apagar o filme: ${titulo}`,
      buttons: [
        {
          text: 'Confirmar',
          handler: () => {
            this.excluirFilme(id);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

}
