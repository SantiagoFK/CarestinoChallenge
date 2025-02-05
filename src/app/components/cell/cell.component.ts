import { ChangeDetectionStrategy, Component, ElementRef, model, 
  OnInit, viewChild  } from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  width = model<number>(0);
  cell = viewChild<ElementRef>('cell');
  private active : boolean = false;

  ngOnInit(): void {
    
    //set width and height based on grid parent input
    (this.cell()!.nativeElement as HTMLElement).style.width = `${this.width()}px`;
    //heigh is equal to width to make it a square
    (this.cell()!.nativeElement as HTMLElement).style.height = `${this.width()}px`;
  }
  
  protected toggleColor() : void {
    this.active = !this.active;
   
    (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
      (this.active) ? 'purple' : 'initial';
  }
}
