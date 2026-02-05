import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  a: string = "Hello";
  
  color: string = "color2";

  name: string = "";

  counter = signal(0);
  

  increment(){
    this.counter.set(this.counter() + 1);
  }

  decrease(){
    this.counter.set(this.counter() - 1);
  }
 

}
