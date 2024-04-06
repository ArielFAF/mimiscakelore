import { Component, OnInit } from '@angular/core';
import { Supermercado } from 'src/app/modelos/supermercado.model';
import { SupermercadoService } from 'src/app/servicios/supermercado.service';

@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.css']
})
export class ListaSupermercadosComponent implements OnInit {
  Supermercado: Supermercado[] | undefined;

  constructor(private supermercadoService: SupermercadoService) { }

  ngOnInit() {
    this.supermercadoService.obtenerListaSupermercados().subscribe( res => {
      this.Supermercado = res.map( e => {
        return {
          id : e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as Supermercado;
      })
    });
  }
  
  removerSupermercado (Supermercado: Supermercado) {
    if(confirm("Seguro de eliminar " + Supermercado.name)) {
      this.supermercadoService.eliminarSupermercado(Supermercado);
    }
  }

}
