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
  titel = "Feed the cat";


  //String
  firstName: Signal<string> = signal("John"); //with typecast
  lastName = signal("Sheppard");              //without typecast

  //int
  roomNr = signal(409);

  //boolean
  done = signal(false);

  //Array
  cityList: Signal<Array<string>> = 
    signal(["Atlantis", "Mexiko City", "Honkong"]);

  //Object
  person = signal({
    name: "Frey",
    age: 25
  });

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
