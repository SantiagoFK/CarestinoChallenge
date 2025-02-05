import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GridComponent } from './components/grid/grid.component';

@Component({
  selector: 'app-root',
  imports: [GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'CarestinoChallenge';
}
