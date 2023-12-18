import { Component } from '@angular/core';
import { products, typeProduct } from 'src/app/shared/utils/data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  products = products;
  typeProducts = typeProduct;
  active: number = 0
  ngOnInit(){
  }
}
