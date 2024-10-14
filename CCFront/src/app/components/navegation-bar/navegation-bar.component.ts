import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navegation-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navegation-bar.component.html',
  styleUrl: './navegation-bar.component.css'
})
export class NavegationBarComponent {

}
