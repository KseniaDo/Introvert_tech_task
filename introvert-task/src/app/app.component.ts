import { Component } from '@angular/core';
import { Droplist } from '../droplist/droplist.component';

@Component({
  selector: 'app-root',
  imports: [Droplist],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'introvert-task';
}
