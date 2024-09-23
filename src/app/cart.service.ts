import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart = [];
  private cartSubject = new BehaviorSubject([]);

  // addToCart(product) {
  //   this.cart.push(product);
  //   this.cartSubject.next(this.cart);
  // }

  getCart() {
    return this.cartSubject.asObservable();
  }

  // removeFromCart(productId) {
  //   this.cart = this.cart.filter(item => item.id !== productId);
  //   this.cartSubject.next(this.cart);
  // }

  clearCart() {
    this.cart = [];
    this.cartSubject.next(this.cart);
  }
}

