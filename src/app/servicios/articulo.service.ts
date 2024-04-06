import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Articulo } from '../modelos/articulo.model';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {

  // articuloLista: AngularFireList<any>;

  // selectedArticulo: Articulo = new Articulo();

  constructor(private angularFirestore: AngularFirestore) { }

  obtenerArticulos() {
    // return this.articleList = this.firebase.list('articles',ref => ref.orderByChild('name'));
    return this.angularFirestore.collection('articulos').snapshotChanges();
  }

  insertarArticulo(articulo: Articulo) {
    // this.articleList.push({
    //   name: article.name.charAt(0).toUpperCase() + article.name.slice(1),
    //   category_key: article.category_key
    // });

    return new Promise<any>((resolve, reject) => {
      this.angularFirestore
        .collection('articulos')
        .add(articulo)
        .then(response => { console.log(response) }, error => reject(error))
    });
  }

  // eliminarArticulo($key: string) {
  eliminarArticulo(articulo: { $key: string | undefined; }) {
    // this.articleList.remove($key);
    return this.angularFirestore.collection('articulos').doc(articulo.$key).delete();
  }

  // actualizarArticulo(articulo: Articulo) {
    actualizarArticulo(articulo: Articulo, id: string | undefined) {
    // this.articleList.update(article.$key, {
    //   name: article.name.charAt(0).toUpperCase() + article.name.slice(1),
    //   category_key: article.category_key
    // });
    return this.angularFirestore
      .collection('articulos')
      .doc(id)
      .update({
        name: articulo.name.charAt(0).toUpperCase() + articulo.name.slice(1),
        category_key: articulo.category_key
      });

  }

}

