import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RockComponent } from './rock/rock.component';
import { TrapComponent } from './trap/trap.component';
import { PopComponent } from './pop/pop.component';
import { ReggaetonComponent } from './reggaeton/reggaeton.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component'; // Detalle del artista
import { CartComponent } from './cart/cart.component'; // Carrito de compras
import { TicketComponent } from './ticket/ticket.component'; // Entrada (PDF)
import { NotFoundComponent } from './not-found/not-found.component'; // Página 404
import { ArtistasComponent } from './artistas/artistas.component';
import { MetalComponent } from './metal/metal.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'artistas', component: ArtistasComponent },


  { path: 'rock', component: RockComponent },
  { path: 'rock/:id', component: ArtistDetailComponent },

  { path: 'trap', component: TrapComponent },
  { path: 'trap/:id', component: ArtistDetailComponent },

  { path: 'pop', component: PopComponent },
  { path: 'pop/:id', component: ArtistDetailComponent },

  { path: 'reggaeton', component: ReggaetonComponent },
  { path: 'reggaeton/:id', component: ArtistDetailComponent }, 

  { path: 'metal', component: MetalComponent },
  { path: 'metal/:id', component: ArtistDetailComponent }, 

  { path: 'cart', component: CartComponent },
  { path: 'ticket', component: TicketComponent },

  { path: '**', component: NotFoundComponent }
];
