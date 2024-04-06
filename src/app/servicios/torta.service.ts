import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Torta } from '../modelos/torta.model';

@Injectable({
  providedIn: 'root'
})
export class TortaService {

  constructor(private angularFirestore: AngularFirestore) { }

  getTortas() {
    return this.angularFirestore
                .collection('tortas')
                .snapshotChanges()
  }

  getTortaById(id){
    return this.angularFirestore
                .collection('tortas')
                .doc(id)
                .valueChanges()
  }

  createTorta(torta: Torta) {
    return new Promise<any> ((resolve,reject) => {
      this.angularFirestore
            .collection('tortas')
            .add(torta)
            .then( (response) => {
              console.log(response)
            },
            (error) => {
              reject(error)
            })
    })
  }

  updateTorta(torta: Torta, id) {
    return this.angularFirestore
                .collection('tortas')
                .doc(id)
                .update({
                  name: torta.name,
                  size: torta.size,
                  price: torta.price
                });
  }

  deleteTorta(torta) {
    return this.angularFirestore
                .collection('tortas')
                .doc(torta.id)
                .delete()
  }
}
