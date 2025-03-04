import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from "../components/product-details/product-details.component";
import { ProductListComponent } from "../components/product-list/product-list.component";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Product-dashboard';
}
