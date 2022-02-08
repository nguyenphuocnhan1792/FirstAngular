import { Component, Input, OnInit } from '@angular/core';

 class Product {
  thumbnailUrl:string;
  name!: string;
  price!: number;
  description!: string;
  value!: number;
}
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  products:Product[] = [
    {
      thumbnailUrl: '/assets/images/bia_rungxa.jpg',
      name: 'rung xa',
      price: 20000,
      description: '',
      value: 3
    },
    {
      thumbnailUrl: '/assets/images/thihoabiahop.jpg',
      name: 'thi hoa',
      price: 25000,
      description: '',
      value: 2
    },
    {
      thumbnailUrl: '/assets/images/trangsachcuphienbiaxua.jpg',
      name: 'trang sach cu',
      price: 30000,
      description: '',
      value: 1
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }
  removeProduct(params:Product): void {
    var index = this.products.findIndex(p => p.name === params.name);
    this.products.splice(index, 1);
  }
}
