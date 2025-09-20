import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Estado del GIF seleccionado compartido entre componentes
  private selectedGifSource = new BehaviorSubject<any>(null);
  selectedGif$: Observable<any> = this.selectedGifSource.asObservable();

  setSelectedGif(gif: any) {
    this.selectedGifSource.next(gif);
  }

  clearSelectedGif() {
    this.selectedGifSource.next(null);
  }
}
