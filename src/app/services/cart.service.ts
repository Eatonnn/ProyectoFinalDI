// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


export interface CartItem {
  artistName: string;
  date: string;
  ticketType: string;
  price: number;
}


@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);

  // Define cartItems$ como Observable<CartItem[]>
  cartItems$: Observable<CartItem[]> = this.cartItemsSubject.asObservable();

  constructor() {
    // Cargar los elementos del carrito desde localStorage al iniciar
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    this.cartItems = storedCartItems;
    this.cartItemsSubject.next(this.cartItems);
  }

  // Método para añadir un artículo al carrito
  addItemToCart(item: CartItem): void {
    this.cartItems.push(item);
    this.cartItemsSubject.next([...this.cartItems]);
    this.saveToLocalStorage();
  }

  // Método para obtener los elementos del carrito
  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  // Método para vaciar el carrito
  clearCart(): void {
    this.cartItems = [];
    this.cartItemsSubject.next([]);
    this.saveToLocalStorage();
  }

  // Método privado para guardar el estado del carrito en localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItemFromCart(itemToRemove: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item !== itemToRemove);
    this.cartItemsSubject.next([...this.cartItems]);
    this.saveToLocalStorage();
  }
}