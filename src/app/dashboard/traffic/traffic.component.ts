import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { TrafficStatsService } from '../../traffic-stats.service';

@Component({
  selector: 'app-traffic',
  standalone: true,
  imports: [],
  templateUrl: './traffic.component.html',
  styleUrl: './traffic.component.css'
})
export class TrafficComponent {
  traficStatsService = inject(TrafficStatsService);
  dummyTrafficData: any;
  maxTraffic: any;

  ngOnInit(){
    this.dummyTrafficData = this.traficStatsService.getTrafficStats();
    console.log(this.dummyTrafficData);
    this.maxTraffic = Math.max(...this.dummyTrafficData.map((data: { value: any; }) => data.value));
  }
}
