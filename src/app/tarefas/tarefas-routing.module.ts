import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar-tarefa/listar-tarefa.component';

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar',
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent,
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent,
  },
];
