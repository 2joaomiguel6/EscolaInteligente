import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessoresComponent } from './professores/professores.component';
import { AlunosComponent } from './alunos/alunos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'}, //quando não colocar nada ele irá para a dashboard
  {path: 'dashboard', component: DashboardComponent},
  {path: 'alunos', component: AlunosComponent},//rota de direcionamento, se digitar no link irá diretamente
  {path: 'perfil', component: PerfilComponent},
  {path: 'professores', component: AlunosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
