import { Component, OnInit } from '@angular/core';
import { TortaService } from 'src/app/servicios/torta.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  public tortaForm:FormGroup;

  constructor(public tortaService: TortaService,
              public formBuilder: FormBuilder,
              public router: Router) {
                this.tortaForm = this.formBuilder.group({
                  name : [''],
                  size: [''],
                  price: ['']
                })
               }

  ngOnInit(): void {
  }

  onSubmit() {
    this.tortaService.createTorta(this.tortaForm.value);
    this.router.navigate(['']);
  }

}
