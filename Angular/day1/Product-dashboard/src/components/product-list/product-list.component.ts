import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-product-list',
  standalone: true, // If using standalone components
  imports: [CommonModule, ProductDetailsComponent], // Only if using standalone components
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'product1', price: 10, description: 'hello test' },
    { id: 2, name: 'product2', price: 10, description: 'hello test' },
    { id: 3, name: 'product3', price: 10, description: 'hello test' },
    { id: 4, name: 'product4', price: 10, description: 'hello test' },
  ];
  oneProduct = this.products[0];
}
