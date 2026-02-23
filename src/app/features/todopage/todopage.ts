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
  todos: TodoResponse[] = [];
  editingTodoId: string | null = null;

  todoForm: FormGroup;
  constructor(private fb: FormBuilder){
     this.todoForm = this.fb.group({
      title: [''],
      description: [''],
      deadline: ['']
    });
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(data => {
      this.todos = data.content;
      console.log(data.content);
    })
  }

  create(){
    const dto: TodoCreateDto = this.todoForm.value;

    this.todoService.create(dto).subscribe(data =>{
        console.log("Created Object: ")
        console.log(data)
    });
  }

  trackById(index: number, item: TodoResponse) {
    return item.id;
  }




  startEdit(id: string) {
    this.editingTodoId = id;
  }

  cancelEdit() {
    this.editingTodoId = null;
  }








  /*
  tempTodo = signal<Todo>(
    {
      title: "",
      description: "",
      done: false
    }
  )

  todos = signal<Todo[]>([
    {
      id: 1,
      title: "Buy food for Max",
      done: false
    },
    {
      id: 2,
      title: "Lathar ausarbeiten",
      description: "Latharas Character genau ausarbeiten",
      done: false
    },
    { 
      id: 3, 
      title: 'Feed the cat', 
      description: 'Morning feeding', 
      done: false 
    }
  ]);


  editTodoById = signal<number | null>(null);
 
  startEdit(id: number){
    this.editTodoById.set(id);
  }

  endEdit(){
    this.editTodoById.set(null);
  }

  toggleDone(id: number){
    this.todos.update(todos => 
      todos.map(todo => 
        todo.id === id ? {...todo, done: !todo.done} : todo
      )
    )

    console.log(
    this.todos().find(t => t.id === id)
    );
  }

  toggleDone(id: number){

    console.log('clicked', id);
    console.log('todos signal:', this.todos());

    let todo: Todo|undefined = this.todos().find(todo => todo.id === id);
    todo?.done = !todo?.done;
    console.log(todo);
  }

  titel = "Feed the cat";

  todo1 = signal<Todo>({
    id: 1,
    title: "Buy food for Max",
    done: false
  });
  lineThrough: string = "";

  toggleDone(){
    if(this.todo1().done === true){
      this.lineThrough = "";

      this.todo1.update(todo => ({
        ...todo,
        done: false
      }));
    }else{
      this.lineThrough = "text-decoration-line-through";
       this.todo1.update(todo => ({
        ...todo,
        done: true
      }));
    }

    


    console.log(this.todo1())
  }*/
}
