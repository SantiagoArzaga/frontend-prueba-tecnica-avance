import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiKey = 'pxx3bIbPFFLrYajaIHKL0zYTVeTtN9qB';
  private baseUrl = 'https://api.giphy.com/v1/gifs';

  // 🔹 Aquí almacenamos el GIF seleccionado
  private selectedGifSubject = new BehaviorSubject<any>(null);
  selectedGif$ = this.selectedGifSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Obtener GIFs en tendencia desde Giphy
   */
  getTrending(limit: number = 12, offset: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${limit}&offset=${offset}&rating=g`
    );
  }

  /**
   * Buscar GIFs
   */
  searchGifs(query: string, limit: number = 12, offset: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    );
  }

  /**
   * Guardar GIF seleccionado para mostrarlo en Home
   */
  selectGif(gif: any) {
    console.log('[DataService] GIF seleccionado:', gif);
    this.selectedGifSubject.next(gif);
  }

  /**
   * Opcional: resetear selección
   */
  clearSelectedGif() {
    this.selectedGifSubject.next(null);
  }
}
