import { Component } from '@angular/core';
import { product } from '../../../interface/menu';
import { ProductServiceService } from '../../../Service/product-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  addProductMessage: string | undefined;
  constructor(private product: ProductServiceService) {}

  ngOnInit(): void {}

  submit(data: product) {
    this.product.addProduct(data).subscribe((result) => {
      console.log("addProduct",result);
      if (result) {
        this.addProductMessage = 'Product is added successfully';
      }
    });

    // setTimeout(() => {
    //   this.addProductMessage=undefined
    // }, 3000);
  }
}
