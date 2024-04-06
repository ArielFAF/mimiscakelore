import { Component, OnInit } from '@angular/core';
import { Torta } from 'src/app/modelos/torta.model';
import { TortaService } from 'src/app/servicios/torta.service';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  Tortas: Torta[];

  constructor(private tortaService: TortaService) { }

  ngOnInit(): void {
    this.tortaService.getTortas().subscribe( (res) => {

      // this.Tortas = [{id:"1", "name":"TortaH", "price":1000, "size":10}];

      this.Tortas = res.map( (e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Torta)
        };
      });

    });
  }

  deleteRow = (torta) => this.tortaService.deleteTorta(torta);

}
