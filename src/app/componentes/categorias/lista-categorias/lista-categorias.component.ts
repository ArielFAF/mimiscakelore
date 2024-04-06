import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/modelos/categoria.model';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-lista-categorias',
  templateUrl: './lista-categorias.component.html',
  styleUrls: ['./lista-categorias.component.css']
})
export class ListaCategoriasComponent implements OnInit {
  // | undefined , agregado para evitar warning
  Categoria: Categoria[] | undefined;

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categoriaService.obtenerListaCategorias().subscribe( res => {
      this.Categoria = res.map( e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Categoria;
      })
    });
  }

  // : Categoria , agregado para evitar warning
  removerCategoria (Categoria: Categoria) {
    if(confirm("Seguro de eliminar " + Categoria.name)) {
      this.categoriaService.eliminarCategoria(Categoria);
    }
  }

}
