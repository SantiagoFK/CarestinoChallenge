import { ChangeDetectionStrategy, Component, ElementRef, inject, model, 
  OnInit, Renderer2, viewChild  } from '@angular/core';

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
  context = viewChild<ElementRef>('context');
  private active : boolean = false;
  
  renderer2 : Renderer2 = inject(Renderer2);
  private contextMenuActive: boolean = false;

  ngOnInit(): void {
    //set width and height based on grid parent input
    (this.cell()!.nativeElement as HTMLElement).style.width = `${this.width()}px`;

    //height is equal to width to make the cell a square
    (this.cell()!.nativeElement as HTMLElement).style.height = `${this.width()}px`;
  }
  
  protected toggleColor() : void {
    this.active = !this.active;
   
    (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 
      (this.active) ? 'purple' : 'initial';
  }

  protected handleContext(event: Event): void{

    this.contextMenuActive = !this.contextMenuActive
    event.preventDefault();
    
    if(this.contextMenuActive){
      (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 'green';
      (this.context()!.nativeElement as HTMLElement).style.display = 'block';
      this.renderer2.appendChild(this.cell()!.nativeElement, this.context()!.nativeElement);
    }else{
      (this.cell()!.nativeElement as HTMLElement).style.backgroundColor = 'initial';
      (this.context()!.nativeElement as HTMLElement).style.display = 'none';
      this.renderer2.removeChild(this.cell()!.nativeElement, this.context()!.nativeElement);
    }
    
    
  }
}
