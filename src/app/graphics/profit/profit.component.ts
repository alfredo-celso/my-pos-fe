import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profit',
  templateUrl: './profit.component.html',
  styleUrls: ['./profit.component.css']
})
export class ProfitComponent implements OnInit {

  constructor() { }
  title: 'Profit';
  type = 'Gauge';
  data = [ ['Profit', 80] ];
  columnNames: [ ['Label', 'Value']];
  options = { 
    width: 400, height: 300,
    redFrom: 90, redTo: 100,
    yellowFrom:75, yellowTo: 90,
    minorTicks: 5    
  };

  ngOnInit() {
  }

}
