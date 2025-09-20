import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiKey = 'hr13e5LQ58WJoldFVYRwx5L1InXUiMsP';
  private baseUrl = 'https://api.giphy.com/v1/gifs';

  // Soporte para GIF seleccionado (para home)
  private selectedGifSubject = new BehaviorSubject<any>(null);
  selectedGif$ = this.selectedGifSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Obtener GIFs en tendencia desde Giphy
   * @param limit cantidad de GIFs a traer
   * @param offset desplazamiento para paginación
   */
  getTrending(limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/trending?api_key=${this.apiKey}&limit=${limit}&offset=${offset}&rating=g`
    );
  }

  /**
   * Buscar GIFs por palabra clave
   * @param query término de búsqueda
   * @param limit cantidad de resultados
   * @param offset desplazamiento para paginación
   */
  searchGifs(query: string, limit: number = 10, offset: number = 0): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=${limit}&offset=${offset}&rating=g&lang=en`
    );
  }

  /**
   * Establecer el GIF seleccionado desde listado
   * para que lo escuche el componente Home
   * @param gif objeto GIF seleccionado
   */
  setSelectedGif(gif: any): void {
    this.selectedGifSubject.next(gif);
  }
}
