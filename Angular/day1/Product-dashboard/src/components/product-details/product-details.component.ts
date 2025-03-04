import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true, // If using standalone components
  imports: [CommonModule], // Only if using standalone components
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() oneProduct: Product = {} as Product; // Initialize with a default empty Product object
}
