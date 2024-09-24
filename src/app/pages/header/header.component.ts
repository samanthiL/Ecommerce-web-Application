import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Menu } from '../../interface/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

menuType:string ='default';
  constructor(private router:Router){}
  selectedItem :[] =[]
 MenuItems:Menu[] =[
  {id:1,path:'',value:'Home'},
  {id:2,path:'/products',value:'products'},
  {id:3,path:'/login',value:'Login'},
  {id:4,path:'/cart',value:'Cart(0)'},
  {id:5,path:'/seller-home',value:'Seller'}
  

 ]


 SellerItems:Menu[] =[
  {id:1,path:'/seller-home',value:'product Home'},
  {id:2,path:'/seller-products',value:'Add product'},
  {id:3,path:'/login',value:'List'},
  

 ]
ngOnInit(){
  // we can get 
  // id: 3
  // type: 1
  // url: "/products"
  // urlAfterRedirects: "/products"
this.router.events.subscribe((val:any)=>{
  console.log("val",val)
  // if(val){

  // }
  if(val.url){
    console.log("valurl",val.url);
    if (localStorage.getItem('seller') && val.url.includes('seller')) {  
          console.log("this is seller area");
          this.menuType="seller"
    }
    else{
      this.menuType="default"
      console.log("this is not seller area");

    }
  }
})
}

GetSelectedNav(id:number,path:string){
  // this.MenuItems.map((item)=>{
// if(item.id === id){
  this.router.navigate(['/'+path])
// }
// })

}

logout(){
  localStorage.removeItem('seller');
  this.router.navigate(['/'])
}
}
