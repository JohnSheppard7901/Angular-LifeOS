import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from './todopage.model';

@Component({
  selector: 'app-todopage',
  imports: [FormsModule],
  templateUrl: './todopage.html',
  styleUrl: './todopage.css',
})
export class Todopage {
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
  }
}
