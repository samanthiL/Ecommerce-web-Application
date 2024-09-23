import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { signUp,login } from '../interface/menu';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerServiceService {
  private apiUrl = "http://localhost:3000/seller";

  constructor(private http:HttpClient,private router:Router) { 

  }
  // createUser(data:signUp){
    createUser(data:any): Observable<signUp> {
console.log("data",data)
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<any>(this.apiUrl, data, { headers: headers });

  //  return this.http.post('http://localhost:3000/seller',data)
  }

  // userLogin(data:any): Observable<login> {
  //   this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
  //     {observe:'response'}).subscribe((result:any)=>{
       
  //   console.log("data",result);
    // const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    // return this.http.get<any>(this.apiUrl, data, { headers: headers });
    
  //  return this.http.get('http://localhost:3000/seller',data)
    //   }
    userLogin(data:login){
      this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
      {observe:'response'}).subscribe((result:any)=>{
       console.log("result",result)
       if(result && result.body && result.body.length===1){
        console.log("success");

         localStorage.setItem('seller',JSON.stringify(result.body))
         this.router.navigate(['products'])
       }else{
         console.log("login failed");
       }
      })
     }
}
