import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { Todo } from './todopage.model';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { TodoService } from '../../service/todo.service';
import { TodoResponse } from '../../models/todo-response.model';
import { TodoCreateDto } from '../../models/todo-create.model';

@Component({
  selector: 'app-todopage',
  imports: [FormsModule, ReactiveFormsModule, NgClass, CommonModule, NgFor],
  templateUrl: './todopage.html',
  styleUrl: './todopage.css',
})
export class Todopage implements OnInit{
  private todoService = inject(TodoService);
  todos = signal<TodoResponse[]>([]);
  editingTodoId: string | null = null;

  tempTodo: FormGroup;
  todoForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: ['']
    });

    this.tempTodo = this.fb.group({
      title: [''],
      description: [''],
      deadline: [''],
      done: [false]
    });
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(data => {
      this.todos.set(data.content);
      console.log(data.content);
    })
  }

  create(){
    const dto: TodoCreateDto = this.todoForm.value;

    this.todoService.create(dto).subscribe(data =>{
        console.log("Created Object: ")
        console.log(data)
    });

    this.todos.update(todos => [...todos, {
      id: "temp-id",
      title: dto.title,
      description: dto.description || null,
      deadline: dto.deadline || "",
      done: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: "temp-user-id"
    }])
  }

  trackById(index: number, item: TodoResponse) {
    return item.id;
  }




  startEdit(id: string) {
    this.editingTodoId = id;

      const todo = this.todos().find(t => t.id === id);
      if (todo) {
        this.tempTodo.setValue({
          title: todo.title,
          description: todo.description || '',
          deadline: todo.deadline,
          done: todo.done
        });
      }
  }

  cancelEdit() {
    this.editingTodoId = null;
  }

  saveEdit() {
    if (!this.editingTodoId) return;

    const updatedTodo: TodoResponse = {
      id: this.editingTodoId,
      title: this.tempTodo.value.title,
      description: this.tempTodo.value.description,
      deadline: this.tempTodo.value.deadline,
      done: this.tempTodo.value.done,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: "temp-user-id"
    };

    this.todoService.update(this.editingTodoId, this.tempTodo.value).subscribe( {

      next: (data) => {
        // nur hier UI aktualisieren, wenn Update erfolgreich war
        this.todos.update(todos => 
          todos.map(todo => 
            todo.id === this.editingTodoId ? data : todo
          )
        );
        this.editingTodoId = null;
        console.log("Updated Object: ")
        console.log(data)

      },
      error: (err) => {
        console.error("Update failed:", err);
        // ggf. UI informieren, dass Update fehlgeschlagen ist
      }
      
    });

  }
}
