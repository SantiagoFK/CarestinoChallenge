import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { CellComponent } from './components/cell/cell.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, GridComponent, CellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CarestinoChallenge';
}
