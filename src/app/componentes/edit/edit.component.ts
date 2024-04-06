import { Component, OnInit } from '@angular/core';
import { TortaService } from 'src/app/servicios/torta.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public editForm: FormGroup;
  tortaRef: any;

  constructor(public tortaService: TortaService,
              public formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private router: Router) {
                this.editForm = this.formBuilder.group({
                  name: [''],
                  size: [''],
                  price: ['']
                })
               }

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.tortaService.getTortaById(id).subscribe( res => {
      this.tortaRef = res;
      this.editForm = this.formBuilder.group({
        name: [this.tortaRef.name],
        size: [this.tortaRef.size],
        price: [this.tortaRef.price]
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    this.tortaService.updateTorta(this.editForm.value,id);
    this.router.navigate(['']);
  }

}
