import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';

export interface Usuario{
  login: string;
  senha: string;
  cpf: string;
  nome: string;
  foto: string;
  idade: string;
  endereco: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  static getUsuarios() {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(private firestore: Firestore) { }

  getUsuarios(): Observable<Usuario[]>{
    const usuariosRef = collection(this.firestore, 'usuarios');
    return collectionData(usuariosRef, {idField: 'id'}) as Observable<Usuario[]>;
  }

  getUsuarioById(id): Observable<Usuario> {
    const usuarioDocRef = doc(this.firestore, `usuarios/${id}`);
    return docData(usuarioDocRef, {idField: 'id'}) as Observable<Usuario>;
  }

}
