import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartItem, CartService } from '../services/cart.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent {
  cartItems$: Observable<any[]> = of([]);
  isCheckoutModalOpen = false;
  purchaseConfirmed = false;
  pdfDownloadPromptShown = false;

  checkoutForm = {
    name: '',
    lastName: '',
    age: null,
    email: '',
    cardNumber: '',
  };

  constructor(private cartService: CartService) {
    this.cartItems$ = this.cartService.cartItems$;
  }

  openCheckoutModal() {
    this.isCheckoutModalOpen = true;
    this.purchaseConfirmed = false;
    this.pdfDownloadPromptShown = false;
  }

  closeCheckoutModal() {
    this.isCheckoutModalOpen = false;
    this.purchaseConfirmed = false;
    this.pdfDownloadPromptShown = false;
    this.resetCheckoutForm();
  }
  

  resetCheckoutForm() {
    this.checkoutForm = {
      name: '',
      lastName: '',
      age: null,
      email: '',
      cardNumber: '',
    };
  }

  confirmPurchase() {
    const { name, lastName, age, email, cardNumber } = this.checkoutForm;

    if (!name || !lastName || !age || !email || !cardNumber) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    this.cartService.clearCart();
    this.purchaseConfirmed = true;

    setTimeout(() => {
      this.showPDFDownloadPrompt();
    }, 2000);
  }

  showPDFDownloadPrompt() {
    this.pdfDownloadPromptShown = true;
  }

  closePDFPrompt() {
    this.pdfDownloadPromptShown = false;
    this.closeCheckoutModal();
  }

  downloadPDF() {
    const email = this.checkoutForm.email;

    this.generateAndSendPDF(email).then(() => {
      alert('Tu ticket ha sido enviado a tu correo electrónico.');
      this.closePDFPrompt();
    });
  }

  removeItem(item: CartItem): void {
    this.cartService.removeItemFromCart(item);
  }

  async generateAndSendPDF(email: string): Promise<void> {
    try {
      const apiURL = 'https://api.example.com/generate-pdf';
      const cartItems = this.cartService.getCartItems();

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, items: cartItems }),
      });

      if (!response.ok) {
        throw new Error('Error al generar el PDF.');
      }

      const pdfBlob = await response.blob();
      this.downloadPDFFromBlob(pdfBlob);
    } catch (error) {
      console.error('Error al generar el PDF:', error);
      alert('Ocurrió un error al generar tu ticket. Por favor, inténtalo más tarde.');
    }
  }

  downloadPDFFromBlob(blob: Blob): void {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ticket.pdf';
    a.click();
    window.URL.revokeObjectURL(url);
  }
}