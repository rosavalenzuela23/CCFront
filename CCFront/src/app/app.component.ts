import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavegationBarComponent} from "./components/navegation-bar/navegation-bar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavegationBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
