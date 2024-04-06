import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  public editarForm: FormGroup;
  categoriaRef: any;

  constructor(
    public categoriaService: CategoriaService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) {
    this.editarForm = this.formBuilder.group({
      name: [''],
      order: ['']
    })
   }

  ngOnInit(): void {
    const id = (this.act.snapshot.paramMap.get('id') || undefined);
    this.categoriaService.obtenerCategoria(id).subscribe(res => {
      this.categoriaRef = res;
      this.editarForm = this.formBuilder.group({
        name:[this.categoriaRef.name],
        order:[this.categoriaRef.order]
      })
    })
  }

  onSubmit() {
    const id = (this.act.snapshot.paramMap.get('id') || undefined);
    this.categoriaService.actualizarCategoria(this.editarForm.value, id);
    this.router.navigate(['lista-categorias']);
  } 

}
