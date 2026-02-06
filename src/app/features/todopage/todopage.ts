import { Component, Signal, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './todopage.model';

@Component({
  selector: 'app-todopage',
  imports: [FormsModule],
  templateUrl: './todopage.html',
  styleUrl: './todopage.css',
})
export class Todopage {
  title = "Feed the cat";

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




  /*
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
