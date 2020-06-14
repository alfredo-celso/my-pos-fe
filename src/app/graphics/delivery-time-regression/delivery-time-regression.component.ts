import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-time-regression',
  templateUrl: './delivery-time-regression.component.html',
  styleUrls: ['./delivery-time-regression.component.css']
})
export class DeliveryTimeRegressionComponent implements OnInit {

  constructor() { }

  title = '';
  type = 'ScatterChart';
  data = [ [11, 37], [12, 19.5], [13, 52], [14, 22], [11, 16.5], [12, 32.8], [13, 72], [14, 55] ];
  columnNames = ['Hours', 'Qty'];
  options = {
    title: 'Delivery time',
    hAxis: {title: 'Hours'},
    vAxis: {title: 'Qty'},
    legend: 'none',
    trendlines: { 0: {} } };
  width = 400;
  height = 300;

  ngOnInit() {
  }

}
