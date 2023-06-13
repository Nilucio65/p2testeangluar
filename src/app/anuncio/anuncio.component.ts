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

  ngOnInit(): void {
    this.loadAnuncio();
  }

  loadAnuncio(){
      this.AnuncioService.getAnuncios().subscribe(
        {
            next:  data =>  this.anuncio = data,
            error: msg  => console.log("Erro ao chamar o endpont " + msg)
        }
      )
  }

  Save(){

    this.AnuncioService.save(this.formGroupAnuncio.value).subscribe(
      {
        next: data =>{
          this.anuncio.push(data);
        }
      }
    )
    this.loadAnuncio();
    }




}
