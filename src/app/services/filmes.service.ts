/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { collectionData, doc, docData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  [x: string]: any;

  constructor(private firestore: Firestore) { }

  getFilmes(): Observable<Filme[]>{
    const filmesRef = collection(this.firestore, 'filmes');
    return collectionData(filmesRef, {idField: 'id'}) as Observable<Filme[]>;
  }

  getFilme(id): Observable<Filme[]>{
    const filmeDocRef = doc(this.firestore, `filmes/${id}`);
    return docData(filmeDocRef, {idField: 'id'}) as Observable<Filme[]>;
  }

  addFilme(filme: Filme){
    const filmesRef = collection(this.firestore, 'filmes');
    return addDoc(filmesRef, filme);
  }
  deleteFilme(id){
    const filmesRef = doc(this.firestore, `filmes/${id}`);
    return deleteDoc(filmesRef);
  }

  updateFilme(id, filme: Filme){
    const filmeDocRef = doc(this.firestore, `filmes/${filme.id}`);
    return updateDoc(filmeDocRef, {id: filme.id, titulo: filme.titulo, lancamento: filme.lancamento, sinopse: filme.sinopse, foto: filme.foto, genero: filme.genero, classificacao: filme.classificacao,
    arrecadacao: filme.arrecadacao });
  }

}
