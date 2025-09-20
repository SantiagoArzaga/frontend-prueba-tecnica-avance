import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  user: string | null = null;
  showcaseGifs: any[] = [];
  selectedGif: any = null;

  // (Opcional) slider/hero
  sliderImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    'https://images.unsplash.com/photo-1508672019048-805c876b67e2',
  ];
  currentSlide = 0;

  // (Opcional) cards demo
  cards = [
    {
      title: 'Gif divertido',
      img: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
      text: 'Card de ejemplo con un gif',
    },
    {
      title: 'Gif random',
      img: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
      text: 'Otra card de ejemplo',
    },
    {
      title: 'Más gifs',
      img: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
      text: 'Contenido demo',
    },
  ];

  // (Opcional) modal
  modalImage: string | null = null;
  showModal = false;

  constructor(
    private router: Router,
    private dataService: DataService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit(): void {
    this.loadUser();
    this.loadTrending();
    this.subscribeToSelectedGif();
  }

  loadUser() {
    this.user = localStorage.getItem('email');
  }

  loadTrending() {
    this.dataService.getTrending(3).subscribe((res) => {
      this.showcaseGifs = res?.data || [];
    });
  }

  // >>> Suscribirse al SharedDataService para reflejar la selección
  subscribeToSelectedGif() {
    this.sharedData.selectedGif$.subscribe((gif) => {
      this.selectedGif = gif;
    });
  }

  navigateToListado() {
    this.router.navigate(['/listado']);
  }

  // (Opcional) slider
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.sliderImages.length) %
      this.sliderImages.length;
  }

  // (Opcional) modal
  openModal(img: string) {
    this.modalImage = img;
    this.showModal = true;
  }

  closeModal() {
    this.modalImage = null;
    this.showModal = false;
  }
}
