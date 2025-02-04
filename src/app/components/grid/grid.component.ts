import { ChangeDetectionStrategy, Component, OnInit, QueryList } from '@angular/core';
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
  cellWidth!: number;
  cells: CellComponent[] = [];

  //Set the rows
  //use ngfor to create cells

  ngOnInit(): void {
    console.log(window.screen.availWidth);
    //Get current screen width
    this.currentScreenWidth = window.screen.availWidth;

    //Divide the screen width in 100 parts (cells)
    this.cellWidth = this.currentScreenWidth / 100;

    
    // for(let i = 0; i < 99; i++){
    //   let newCell!: CellComponent;
    //   newCell.width.set(this.cellWidth);
    //   this.cells = [...this.cells, newCell];
    // }
  }

}
