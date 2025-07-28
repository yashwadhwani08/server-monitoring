import {
  AfterContentInit,
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
