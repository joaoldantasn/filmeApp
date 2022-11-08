import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {

  usuarios = [];

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.getUsuarios().subscribe(res =>{
      console.log(res);
      this.usuarios = res;
    });
  }

  ngOnInit() {
  }

}
