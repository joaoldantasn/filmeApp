/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario, UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myapp = 'Myapp';
  usuarios = new Array<Usuario>();
  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, usurarioService: UsuariosService, private alertController: AlertController, private rota: Router) {
    usurarioService.getUsuarios().subscribe(response => (this.usuarios = response));
    this.formLogin = this.formBuilder.group({
      login: [null, Validators.compose([Validators.required,  Validators.minLength(6)])],
			senha: [null, Validators.compose([Validators.required, Validators.minLength(3)])],
		});
  }

  ngOnInit() {
  }

  verificaSeTem(){
    const valido = this.usuarios.find(user =>user.login === this.formLogin.value.login);
    console.log(valido);
    if(typeof valido === 'undefined'){
      this.usuarioValido('Erro', 'Usuário Inválido', '', 'OK');
    } else if(valido.senha !== this.formLogin.value.senha){
      this.usuarioValido('Erro', 'Senha Inválida', '', 'OK');
    }else{
      this.rota.navigateByUrl('home');
    }
  };
   async usuarioValido(headeR: string, subHeadeR: string, messagE: string, buttonS: string): Promise<void>{
   const alert = await this.alertController.create({
     header: headeR,
     subHeader: subHeadeR,
     message: messagE,
     buttons: [buttonS]
   });
   await alert.present();
  }

}
