import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() nameProduct: string = '';
  @Input() priceOld: number = 0;
  @Input() price: number = 0;
  @Input() img: string[] = [];
}
