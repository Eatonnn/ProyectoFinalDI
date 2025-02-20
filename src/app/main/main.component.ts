import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
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