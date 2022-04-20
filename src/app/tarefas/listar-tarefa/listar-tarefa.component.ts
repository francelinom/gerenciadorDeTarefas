import { Tarefa } from './../shared/tarefa.model';
import { TarefasService } from './../shared/tarefas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  tarefas!: Tarefa[];
  constructor(private tarefaService: TarefasService) {}

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: any): void {
    $event.preventDefault();

    if (confirm('Deseja remover a tarefa "' + tarefa.nome + '"? ')) {
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.tarefaService.listarTodos();
    }
  }
}
