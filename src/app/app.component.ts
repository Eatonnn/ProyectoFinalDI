// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // Añade el Header aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoConciertos';

  // Método para manejar la búsqueda
  onSearch(query: string) {
    console.log('Búsqueda:', query);

    // Aquí puedes filtrar datos o navegar a una página de resultados
    // Por ejemplo, podrías redirigir a una página de resultados:
    // this.router.navigate(['/search', query]);
  }
}