// header.component.ts
import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isMenuOpen = false; // Estado del menú lateral
  @Output() searchEvent = new EventEmitter<string>();

  // Método para abrir/cerrar el menú lateral
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Método para cerrar el menú lateral
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Método para manejar la búsqueda
  onSearch(event: Event) {
    const query = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(query);
  }

  // Método para manejar la acción de "Buscar" al hacer clic en el botón
  onSearchSubmit() {
    console.log('Buscar clickeado');
    // Aquí puedes agregar lógica adicional si es necesario
  }
}