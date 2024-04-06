import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SupermercadoService } from 'src/app/servicios/supermercado.service';

@Component({
  selector: 'app-crear-supermercado',
  templateUrl: './crear-supermercado.component.html',
  styleUrls: ['./crear-supermercado.component.css']
})
export class CrearSupermercadoComponent implements OnInit {
  public supermercadoForm : FormGroup;

  constructor(
    public supermercadoService: SupermercadoService,
    public formBuilder: FormBuilder,
    public router: Router
  ) { 
    this.supermercadoForm = this.formBuilder.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.supermercadoService.crearSupermercado(this.supermercadoForm.value);
    this.router.navigate(['lista-supermercados']);
  }

}
