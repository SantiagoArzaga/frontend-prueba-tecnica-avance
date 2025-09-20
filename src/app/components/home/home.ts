import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data';

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

  // Slider con imágenes locales desde /assets
  sliderImages = [
    'assets/banner1.jpg',
    'assets/banner2.jpg',
    'assets/banner3.jpg',
  ];
  currentSlide = 0;

  // Cards
  cards = [
    {
      title: 'Gif divertido',
      img: 'https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif',
    },
    {
      title: 'Gato sorprendido',
      img: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif',
    },
    {
      title: 'Fiesta',
      img: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    },
  ];

  // Modal
  showModal = false;
  modalImage: string | null = null;

  selectedGif: any = null;

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.loadUser();
    this.loadTrending();
    this.loadSelectedGif();
  }

  loadUser() {
    this.user = localStorage.getItem('email');
  }

  loadTrending() {
    this.dataService.getTrending(3).subscribe((res) => {
      this.showcaseGifs = res.data;
    });
  }

  loadSelectedGif() {
    this.dataService.selectedGif$.subscribe((gif) => {
      this.selectedGif = gif;
    });
  }

  navigateToListado() {
    this.router.navigate(['/listado']);
  }

  // Slider
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.sliderImages.length;
  }

  prevSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.sliderImages.length) %
      this.sliderImages.length;
  }

  // Modal
  openModal(img: string) {
    this.modalImage = img;
    this.showModal = true;
  }

  closeModal() {
    this.modalImage = null;
    this.showModal = false;
  }
}
