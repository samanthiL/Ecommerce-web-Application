import { Component, numberAttribute } from '@angular/core';
import { product } from '../../../interface/menu';
import { ProductServiceService } from '../../../Service/product-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  constructor(private route: ActivatedRoute,private product: ProductServiceService) {}
  productMessage: undefined | string;
  productList: undefined | product[];
   productIdd = '0';

  ngOnInit(): void {
    let productId = this.route.snapshot.paramMap.get('id');
    console.log("productId",typeof(productId))
    // if()
    console.log("producssssssssssstId",productId);

    productId && this.product.getProductList(productId).subscribe((result)=>{
      if(result){
        console.log("aadadadadadasd")
        this.productList =result;
      }
     })
     console.log("failllll")

// this.list() 
  }

  submit(data: product) {
    this.product.updateProduct(data).subscribe((result) => {
      console.log("updateProduct",result);
      if (result) {
        this.productMessage = 'Product is updated successfully';
      }
    });
}

}
