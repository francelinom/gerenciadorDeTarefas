import { RouterModule } from '@angular/router';
import { TarefasService } from './shared/tarefas.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarTarefaComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefasService],
})
export class TarefasModule {}
