import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-grid',
  imports: [CellComponent ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridComponent implements OnInit {
  currentScreenWidth!: number;
  currentScreenHeight!: number;

  cells: CellComponent[] = [];
  cellWidth!: number;
  totalCells!: number;

  rowCount!: number;

  ngOnInit(): void {
    //Get current screen width and height (could be observables)
    this.currentScreenWidth = window.screen.width;
    this.currentScreenHeight = window.screen.height;

    //Divide the screen width in 100 parts (cells)
    this.cellWidth = this.currentScreenWidth / 100

    //Divide the screen height in cellWidth measure
    this.rowCount = Math.ceil(this.currentScreenHeight / this.cellWidth);

    //Total cells needed
    this.totalCells = this.rowCount * 100;
    
    for(let j = 0; j < this.totalCells; j++){
      let newCell!: CellComponent;
      this.cells = [...this.cells, newCell];
    }
  }

}
