import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private selectedGifSource = new BehaviorSubject<any>(null);
  selectedGif$ = this.selectedGifSource.asObservable();

  setSelectedGif(gif: any) {
    this.selectedGifSource.next(gif);
  }
}
