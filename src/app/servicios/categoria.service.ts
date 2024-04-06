import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Categoria } from '../modelos/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private angularFirestore: AngularFirestore) { }

  obtenerCategoria(id: string | undefined) {
    return this.angularFirestore
      .collection('categorias')
      .doc(id)
      .valueChanges()
  }

  obtenerListaCategorias() {
    return this.angularFirestore
      .collection('categorias')
      .snapshotChanges();
  }

  crearCategoria(categoria: Categoria) {
    return new Promise<any>((resolve,reject) => {
      this.angularFirestore
        .collection('categorias')
        .add(categoria)
        .then(response => {console.log(response)}, error => reject(error));
    });
  }

  eliminarCategoria(categoria: Categoria) {
    return this.angularFirestore
      .collection('categorias')
      .doc(categoria.id)
      .delete();
  }

  // : string | undefined , agregado para evitar warning
  actualizarCategoria(categoria:Categoria, id: string | undefined) {
    return this.angularFirestore
      .collection('categorias')
      .doc(id)
      .update({
        name: categoria.name,
        order: categoria.order
      });
  }


}

