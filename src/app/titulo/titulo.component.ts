import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  standalone: true,
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent implements OnInit {

  @input() titulo?: string;

    constructor(){

    }
    ngOnInit(){
        
    }
}
