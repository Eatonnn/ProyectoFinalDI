// cart.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../services/cart.service'; // Ajusta la ruta según tu estructura
import { Observable } from 'rxjs'; // Importa Observable desde RxJS



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule], // Importa CommonModule para usar *ngIf y *ngFor
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems$: Observable<any[]>; // Declara cartItems$ con el tipo correcto

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
    this.cartItems$.subscribe(items => {
      console.log('Productos en el carrito:', items); // Verifica que los productos tengan artistImage
    });
  }

  clearCart() {
    this.cartService.clearCart();
  }
}