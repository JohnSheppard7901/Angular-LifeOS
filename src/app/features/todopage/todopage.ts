import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todopage',
  imports: [FormsModule],
  templateUrl: './todopage.html',
  styleUrl: './todopage.css',
})
export class Todopage {
  titel = "Feed the cat";
}
