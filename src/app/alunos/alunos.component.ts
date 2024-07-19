import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/aluno';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  standalone: true,
  imports: [],
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.css'
})
export class AlunosComponent implements OnInit {

  public modalRef?: BsModalRef;
  public alunoForm?: FormGroup;
  public titulo = 'Alunos';
  public alunoSelected?: Aluno;
  public textSimple?: string;

  public aluno = [ //propriedade lista de nomes dos alunos
    {id:1 , nome: 'João', sobrenome:'Novais', telefone:32526484},
    {id:2 , nome: 'Matheus', sobrenome:'Haru', telefone:32526483},
    {id:3 , nome: 'Vitor', sobrenome:'Gilhi', telefone:32525484},
    {id:4 , nome: 'Felipe', sobrenome:'Janiro', telefone:32526435},
    {id:5 , nome: 'Otávio', sobrenome:'Melo', telefone:32529057},
    ];
 
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

    constructor(private fb: FormBuilder, private modalService: BsModalService){
      this.criarForm();
    }
    ngOnInit(){

    }

    criarForm(){
      this.alunoForm = this.fb.group({
        nome:['', Validators.required],
        sobrenome: ['', Validators.required],
        telefone:['', Validators.required]
      });
    }

    alunoSubmit(){
      console.log(this.alunoForm?.value);
    }
    alunoSelect(aluno: Aluno){
      this.alunoSelected = aluno;
      this.alunoForm?.patchValue(aluno);
    }
    voltar(){
      this.alunoSelected = null;
    }

    

}