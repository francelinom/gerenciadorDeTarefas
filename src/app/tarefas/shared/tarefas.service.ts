import { Tarefa } from './tarefa.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarefasService {
  constructor() {}

  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  buscarPorId(id: number): Tarefa {
    const tarefas: any[] = this.listarTodos();
    return tarefas.find((tarefa) => tarefa.id === id);
  }
}
