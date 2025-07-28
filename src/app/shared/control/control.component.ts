import {
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ContentChild,
  ElementRef,
  HostBinding,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clciked');
  // }
  label = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>
  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLFormElement>>('input');

  constructor() {
    afterRender(()=>{
      console.log('afterRender used for executing some function after any changes are made in the application anywhere, not only limited to this component');
    })

    afterNextRender(()=>{
      console.log("Use afterNextRender for one-time DOM operations after the initial render.")
    })
    
  }
  
  ngAfterContentInit(): void {
    console.log(
      'Used when some function needs to be triggered after the projected content is initialised'
    );
  }

  onClick() {
    console.log('Clicked');
    console.log(this.el);
    console.log(this.control());
  }
}
