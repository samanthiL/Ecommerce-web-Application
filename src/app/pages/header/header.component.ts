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


  constructor(private router:Router){}
  selectedItem :[] =[]
 MenuItems:Menu[] =[
  {id:1,path:'',value:'Home'},
  {id:2,path:'/products',value:'products'},
  {id:3,path:'/login',value:'Login'},
  {id:4,path:'/cart',value:'Cart(0)'}

 ]
ngOnInit(){

}

GetSelectedNav(id:number,path:string){
  // this.MenuItems.map((item)=>{
// if(item.id === id){
  this.router.navigate(['/'+path])
// }
// })

}

}
