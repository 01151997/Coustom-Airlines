import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApptestdirective]'
})
export class ApptestdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2 ) { }


  @HostListener('Click') myClick(){
    alert('Clicked')
  }

  @HostListener('mouseover') myMouseOver(){
// alert('Started')
this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','rgb(248, 248, 248)')
  }

  @HostListener('mouseout') myMouseOut(){
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor','white')
  }
}
