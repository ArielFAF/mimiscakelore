import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Supermercado } from '../modelos/supermercado.model';

@Injectable({
  providedIn: 'root'
})
export class SupermercadoService {

  constructor(private angularFirestore: AngularFirestore) { }

  obtenerSupermercado(id: string | undefined) {
    return this.angularFirestore
      .collection('supermercados')
      .doc(id)
      .valueChanges()
  }

  obtenerListaSupermercados() {
    return this.angularFirestore
      .collection('supermercados')
      .snapshotChanges();
  }

  crearSupermercado(supermercado: Supermercado) {
    return new Promise<any>((resolve,reject) => {
      this.angularFirestore
        .collection('supermercados')
        .add(supermercado)
        .then(response => {console.log(response)}, error => reject(error));
    });
  }

  eliminarSupermercado(supermercado: Supermercado) {
    return this.angularFirestore
      .collection('supermercados')
      .doc(supermercado.id)
      .delete();
  }

  actualizarSupermercado(supermercado:Supermercado, id: string | undefined) {
    return this.angularFirestore
      .collection('supermercados')
      .doc(id)
      .update({
        name: supermercado.name
      });
  }

}
