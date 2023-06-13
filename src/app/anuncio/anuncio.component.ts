import { AnuncioService } from './../anuncio.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Anuncio } from '../anuncio';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent {

  anuncio: Anuncio[] = [];
  formGroupAnuncio!: FormGroup;
  isEditing: boolean = false;

  constructor (private AnuncioService: AnuncioService, private formBuilder: FormBuilder){
    this.formGroupAnuncio = formBuilder.group({
      id: [''],
      url: [''],
      tipo: [''],
      anunciante: [''],
      preco: ['']
    })
  }

  Save(){

    this.AnuncioService.save(this.formGroupAnuncio.value).subscribe(
      {
        next: data =>{
          this.anuncio.push(data);
        }
      }
    )
    }




}
