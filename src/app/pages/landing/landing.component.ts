import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { SellerServiceService } from '../../Service/seller-service.service';
import { signUp } from '../../interface/menu';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
  showLogin: boolean = true;
  showHello: boolean = true;
  header = this.showLogin? 'seller Login' : 'seller sign up';

  constructor(private seller:SellerServiceService,private router:Router){

  }
  ngOnInit():void {}

  signUp(data:signUp):void{
console.log(data)
// this.seller.createUser(data);
 this.seller.createUser(data).subscribe((result)=>{
   console.log(result);
// if(result){
//   this.router.navigate(['home'])
// }
  })
}
login(data: signUp): void {
  this.seller.userLogin(data)
  
}
openLogin(){
  this.showLogin=true
}
openSignUp(){
  this.showLogin=false
}
}
