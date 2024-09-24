import { Component, OnInit } from '@angular/core';
import { product } from '../interface/menu';
import { ProductService } from '../product.service';
import { ProductServiceService } from '../Service/product-service.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-home',
  standalone: true,
  imports: [FontAwesomeModule,
    RouterModule],
  templateUrl: './seller-home.component.html',
  styleUrl: './seller-home.component.css'
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;

  constructor(private product: ProductServiceService) {}
  fadelete = faTrash;
  iconEdit =faEdit;

  ngOnInit(): void {
    this.list();
  }
  list() {
     this.product.productList().subscribe((result)=>{
      if(result){
        this.productList =result;
      }
     })
  }
  deleteProduct(id: number) {
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 2000);
  }
 
}
