import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-prueba-firebase',
  standalone: true,
  imports: [],
  templateUrl: './prueba-firebase.component.html',
  styleUrl: './prueba-firebase.component.css'
})
export class PruebaFirebaseComponent {
  datos: any[] = [];

  constructor(private firebaseService: FirebaseService) {}

  ngOnInit() {
    // Escuchar cambios en la BD en tiempo real
    this.firebaseService.getCollectionData('users').subscribe((data) => {
      this.datos = data;
      console.log('Datos de Realtime Database:', this.datos);
    });
  }

  // Agregar un nuevo dato
  agregarDato() {
    this.firebaseService.addOrUpdateDocument('productos', 'producto1', { nombre: 'Hamburguesa', precio: 10 })
      .then(() => console.log('Producto agregado'))
  }
}
