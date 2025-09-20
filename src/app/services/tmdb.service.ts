import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject, Signal, signal } from '@angular/core';

const API_KEY = 'hr13e5LQ58WJoldFVYRwx5L1InXUiMsP'; // Reemplaza con tu clave de API válida

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private readonly baseUrl = 'https://api.giphy.com/v1/gifs';

  private gifsSignal: Signal<any[]> = signal([]);

  constructor(private http: HttpClient) {}

  getGifs() {
    const url = `${this.baseUrl}/trending?api_key=${API_KEY}&limit=20&rating=g`;
    this.http.get<any>(url).subscribe((response) => {
      this.gifsSignal = signal(response.data);
    });
  }

  get gifs() {
    return this.gifsSignal;
  }
}
