import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-by-product',
  templateUrl: './sales-by-product.component.html',
  styleUrls: ['./sales-by-product.component.css']
})
export class SalesByProductComponent implements OnInit {

  constructor() { }
  title = 'Sales by product';
  type = 'PieChart';
  data = [
    ['Product 1', 150.0],
    ['Product 2', 150.0],
    ['Product 3', 150.0]
  ];
  columnNames = ['Product', 'Sales'];
  options = { };
  width = 400;
  height = 300;

  ngOnInit() {
  }

}
