import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-sever-status',
  standalone: true,
  imports: [],
  templateUrl: './sever-status.component.html',
  styleUrl: './sever-status.component.css',
})
export class SeverStatusComponent {
  // currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  // private interval ?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;

  constructor() {
    console.log(
      'Safe reading of signal values in TS code as subscriptions are not set there, if you want to subscribe to the signal in TS code, use effect(), susbcription removed if component removed from DOM'
    );
    console.log('Without effect - ' + this.currentStatus());
    effect(() => {
      console.log('With effect - ' + this.currentStatus());
    });
  }

  ngOnInit() {
    this.interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        // this.currentStatus = 'online';
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy() {
    clearTimeout(this.interval);
  }
}
