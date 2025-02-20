import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ArtistService, Artist } from '../services/artist.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() searchEvent = new EventEmitter<string>();

  isMenuOpen = false;
  query: string = '';
  suggestions: Artist[] = [];
  showSuggestions: boolean = false;

  constructor(private artistService: ArtistService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  onSearch() {
    if (this.query.trim()) {
      this.suggestions = this.artistService.searchArtists(this.query);
      this.showSuggestions = this.suggestions.length > 0;
    } else {
      this.suggestions = [];
      this.showSuggestions = false;
    }
  }

  onSearchSubmit() {
    if (this.query.trim()) {
      this.searchEvent.emit(this.query);
      this.showSuggestions = false;
    }
  }

  hideSuggestions() {
    setTimeout(() => {
      this.showSuggestions = false;
    }, 200); // Se oculta después de un corto tiempo para evitar que desaparezca instantáneamente
  }

  selectSuggestion(artist: Artist) {
    this.query = artist.name;
    this.searchEvent.emit(this.query);
    this.showSuggestions = false;
  }
}
