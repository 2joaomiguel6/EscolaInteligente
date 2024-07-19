import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/professor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Diciplina } from '../models/Diciplina';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  standalone: true,
  imports: [],
  templateUrl: './professores.component.html',
  styleUrl: './professores.component.css'
})
export class ProfessoresComponent implements OnInit {

  public modalRef?: BsModalRef;
  public professorForm?: FormGroup;
  public titulo = 'Professores';
  public professorSelected?: Professor;

  public professor = [ //propriedade lista de nomes dos professores
    {id:22556 , nome:'Jeferson', diciplina:'AMS'},
    {id:22077 , nome:'Carla', diciplina: 'Bancos de Dados'},
    {id:22870 , nome:'Luciana', diciplina:'PI' },
    {id:22908 , nome:'Brasa', diciplina:'Banco de Dados'},
    {id:22999 , nome:'Luciano', diciplina: 'PAM'},
    ]
    criarForm(){
      this.professorForm = this.fb.group({
        nome:['', Validators.required],
        diciplina: ['', Validators.required]
      });
    }

    professorSubmit(){
      console.log(this.professorForm?.value);
    }
    professorSelect(professor: Professor){
      this.professorSelected = professor;
      this.professorForm?.patchValue(professor);
    }
    voltar(){
      this.professorSelected = null;
    }
   
   
    openModal(template: TemplateRef<void>) {
      this.modalRef = this.modalService.show(template);
    }
  constructor(private fb: FormBuilder, private modalService: BsModalService){
    this.criarForm();
  }

  ngOnInit() {
      
  }

}
