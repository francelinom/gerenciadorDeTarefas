import { RouterModule } from '@angular/router';
import { TarefasService } from './shared/tarefas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefaComponent } from './editar-tarefa/editar-tarefa.component';
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive';

@NgModule({
  declarations: [ListarTarefaComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefasService],
})
export class TarefasModule {}
