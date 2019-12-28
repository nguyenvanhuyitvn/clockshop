import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {Product} from './../../shared/models';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // pro = new Product;
  // products = this.pro.products;
  products: Array<object>= [
    { name: 'Simple Product 01', img: 'assets/images/product/product-01.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 02', img: 'assets/images/product/product-02.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 03', img: 'assets/images/product/product-03.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 04', img: 'assets/images/product/product-04.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 05', img: 'assets/images/product/product-05.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 06', img: 'assets/images/product/product-06.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 07', img: 'assets/images/product/product-07.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 08', img: 'assets/images/product/product-08.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 09', img: 'assets/images/product/product-09.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 10', img: 'assets/images/product/product-10.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 11', img: 'assets/images/product/product-11.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 12', img: 'assets/images/product/product-12.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 13', img: 'assets/images/product/product-13.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 14', img: 'assets/images/product/product-14.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 15', img: 'assets/images/product/product-15.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 16', img: 'assets/images/product/product-15.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 17', img: 'assets/images/product/product-17.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 18', img: 'assets/images/product/product-18.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 0},
    { name: 'Simple Product 19', img: 'assets/images/product/product-19.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
    { name: 'Simple Product 20', img: 'assets/images/product/product-20.png', price:'90', salePrice: '49', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla', categoryId:1, special: 1},
  ];

  constructor() { }
  show(){
    return of(this.products);
  }
}
