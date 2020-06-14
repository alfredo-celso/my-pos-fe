import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avg-delivery-time',
  templateUrl: './avg-delivery-time.component.html',
  styleUrls: ['./avg-delivery-time.component.css']
})
export class AvgDeliveryTimeComponent implements OnInit {
  constructor() { }
  n_avgMinutes = 11.5;

  ngOnInit() {
  }

}
