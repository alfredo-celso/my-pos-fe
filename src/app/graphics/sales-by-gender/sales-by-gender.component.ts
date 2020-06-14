import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-by-gender',
  templateUrl: './sales-by-gender.component.html',
  styleUrls: ['./sales-by-gender.component.css']
})
export class SalesByGenderComponent implements OnInit {

  constructor() { }
  title = 'Sales by gender';
  type = 'PieChart';
  data = [
     ['Female', 210.0],
     ['Male', 155.0],
     ['Neutro',79.0]
  ];
  columnNames = ['Gender', 'Sales'];
  options = { };
  width = 400;
  height = 300;

  ngOnInit() {
  }

}
