import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SupermercadoService } from 'src/app/servicios/supermercado.service';

@Component({
  selector: 'app-editar-supermercado',
  templateUrl: './editar-supermercado.component.html',
  styleUrls: ['./editar-supermercado.component.css']
})
export class EditarSupermercadoComponent implements OnInit {
  public editarForm: FormGroup;
  supermercadoRef: any;

  constructor(
    public supermercadoService: SupermercadoService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editarForm = this.formBuilder.group({
      name: ['']
    })
   }

  ngOnInit(): void {
    const id = (this.act.snapshot.paramMap.get('id') || undefined);
    this.supermercadoService.obtenerSupermercado(id).subscribe(res => {
      this.supermercadoRef = res;
      this.editarForm = this.formBuilder.group({
        name:[this.supermercadoRef.name],
        order:[this.supermercadoRef.order]
      })
    })
  }

  onSubmit() {
    const id = (this.act.snapshot.paramMap.get('id') || undefined);
    this.supermercadoService.actualizarSupermercado(this.editarForm.value, id);
    this.router.navigate(['lista-supermercados']);
  } 

}
