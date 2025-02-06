import { ChangeDetectionStrategy, Component, ElementRef, inject, model, 
  OnInit, Renderer2, viewChild  } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';

@Component({
  selector: 'app-cell',
  imports: [OverlayModule],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellComponent implements OnInit {
  width = model<number>(0);
  cell = viewChild<ElementRef>('cell');
  context = viewChild<ElementRef>('context');
  private clickedCell : boolean = false;
  contextMenuIsOpen = false;
  drawingModeIsOn = model<boolean>();
  

  ngOnInit(): void {
    //set width and height based on grid parent input
    (this.cell()!.nativeElement as HTMLElement).style.width = `${this.width()}px`;

    //height is equal to width to make the cell a square
    (this.cell()!.nativeElement as HTMLElement).style.height = `${this.width()}px`;
  }
  
  protected toggleColor() : void {
    
    this.clickedCell = !this.clickedCell;
   
    (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
      (this.clickedCell) ? 'purple' : 'initial'; 
  }

  protected handleContext(event: Event): void{
    event.preventDefault();
    
    this.contextMenuIsOpen = !this.contextMenuIsOpen;
  }
  
  protected handleHover(): void {
    if(this.drawingModeIsOn()){
      this.clickedCell = !this.clickedCell;
      
      (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
        (this.clickedCell) ? 'purple' : 'initial'; 
    }
  }
}
