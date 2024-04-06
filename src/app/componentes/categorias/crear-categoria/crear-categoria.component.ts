import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  public categoriaForm : FormGroup;

  constructor(
    public categoriaService: CategoriaService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.categoriaForm = this.formBuilder.group({
      name: [''],
      order: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.categoriaService.crearCategoria(this.categoriaForm.value);
    this.router.navigate(['lista-categorias']);
  }

}
