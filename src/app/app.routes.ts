import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RockComponent } from './rock/rock.component';
import { TrapComponent } from './trap/trap.component';
import { PopComponent } from './pop/pop.component';
import { ReggaetonComponent } from './reggaeton/reggaeton.component';
import { MetalComponent } from './metal/metal.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component'; // Detalle del artista
import { TicketComponent } from './ticket/ticket.component'; // Entrada (PDF)
import { NotFoundComponent } from './not-found/not-found.component'; // Página 404
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  // Rutas principales
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirección a la página principal
  { path: 'home', component: MainComponent }, // Página de inicio
  { path: 'cart', component: CartComponent }, // Página del carrito


  // Rutas por género
  {
    path: 'rock',
    children: [
      { path: '', component: RockComponent }, // Página principal de rock
      { path: ':id', component: ArtistDetailComponent }, // Detalle de artista en rock
    ],
  },
  {
    path: 'trap',
    children: [
      { path: '', component: TrapComponent }, // Página principal de trap
      { path: ':id', component: ArtistDetailComponent }, // Detalle de artista en trap
    ],
  },
  {
    path: 'pop',
    children: [
      { path: '', component: PopComponent }, // Página principal de pop
      { path: ':id', component: ArtistDetailComponent }, // Detalle de artista en pop
    ],
  },
  {
    path: 'reggaeton',
    children: [
      { path: '', component: ReggaetonComponent }, // Página principal de reggaeton
      { path: ':id', component: ArtistDetailComponent }, // Detalle de artista en reggaeton
    ],
  },
  {
    path: 'metal',
    children: [
      { path: '', component: MetalComponent }, // Página principal de metal
      { path: ':id', component: ArtistDetailComponent }, // Detalle de artista en metal
    ],
  },

  // Otras rutas
  { path: 'ticket', component: TicketComponent }, // Entrada (PDF)

  // Ruta para errores 404
  { path: '**', component: NotFoundComponent }, // Página no encontrada
];