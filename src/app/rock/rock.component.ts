import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-rock',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css'] // Corregimos 'styleUrl' a 'styleUrls' (plural)
})
export class RockComponent {
  @ViewChild('trendingCarousel') trendingCarousel!: ElementRef;
  @ViewChild('recommendedCarousel') recommendedCarousel!: ElementRef;




  scrollCarousel(direction: string, carouselType: string): void {
    const track = carouselType === 'trending'
      ? this.trendingCarousel.nativeElement
      : this.recommendedCarousel.nativeElement;

    const scrollAmount = track.offsetWidth / 5; // Ancho de una tarjeta
    if (direction === 'left') {
      track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}