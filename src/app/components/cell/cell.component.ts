import { ChangeDetectionStrategy, Component, ElementRef, model, OnInit, output, viewChild  } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { colorPalette } from '../../shared/color-pallette';

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

  colorChanged = output<keyof typeof colorPalette>();
  activeColor = model<string>();
  
  ngOnInit(): void {
    //set width and height based on grid parent input
    (this.cell()!.nativeElement as HTMLElement).style.width = `${this.width()}px`;

    //height is equal to width to make the cell a square
    (this.cell()!.nativeElement as HTMLElement).style.height = `${this.width()}px`;
  }
  
  protected toggleColor() : void {
    this.clickedCell = !this.clickedCell;
   
    (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
      (this.clickedCell) ? this.activeColor()! : 'white'; 
  }

  protected handleContext(event: Event): void {
    event.preventDefault();
    this.contextMenuIsOpen = !this.contextMenuIsOpen;
  }
  
  protected handleHover(): void {
    if(this.drawingModeIsOn()){
      this.clickedCell = !this.clickedCell;

      (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
      (this.clickedCell) ? this.activeColor()! : 'white'; 
    }
  }

  protected setActiveColor(newColor: keyof typeof colorPalette): void {
    this.contextMenuIsOpen = !this.contextMenuIsOpen;
    this.colorChanged.emit(newColor);
  }
}
