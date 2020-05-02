import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  title = 'Sales by gender';
  type = 'PieChart';
  data = [
     ['Female', 12.0],
     ['Male', 50.0],
     ['Neutro',11.0]
  ];
  columnNames = ['Gender', 'Qty'];
  options = { };
  width = 550;
  height = 400;

  ngOnInit() {

  }

}
