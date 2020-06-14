import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-by-hora-sales',
  templateUrl: './product-by-hora-sales.component.html',
  styleUrls: ['./product-by-hora-sales.component.css']
})
export class ProductByHoraSalesComponent implements OnInit {

  constructor() { }
  title = 'Sales - Product by hour';
  type = 'ComboChart';
  data = ([
    ['11:00',  165,      938,         522,          135,    580.6,      1167],
    ['12:00',  135,      1120,        599,          135,    580.6,      1167],
    ['13:00',  157,      1167,        587,          135,    580.6,      1167],
    ['14:00',  139,      1110,        615,          135,    580.6,      1167],
    ['15:00',  136,      691,         629,          135,    580.6,      1167]
  ])
  columnNames = ['Hour', 'Product 1', 'Product 2', 'Product 3', 'Min', 'Average', 'Max'];

  options = {
    title : 'Sales of Product by hour',
    vAxis: {title: 'Qty'},
    hAxis: {title: 'Hours'},
    seriesType: 'bars',
    series: {5: {type: 'line'}, 4:{type: 'line'}, 3:{type: 'line'}} 
  };
  width = 400;
  height = 300;

  ngOnInit() {
  }

}
