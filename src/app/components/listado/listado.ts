import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DataService } from '../../services/data';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, FormsModule, NgxPaginationModule],
  templateUrl: './listado.html',
  styleUrls: ['./listado.scss'],
})
export class ListadoComponent implements OnInit {
  gifs: any[] = [];
  selectedGifId: string | null = null;
  loading = false;
  error = '';

  // Paginación
  page = 1;
  itemsPerPage = 12;
  total = 0;

  constructor(
    private dataService: DataService,
    private sharedData: SharedDataService
  ) {}

  ngOnInit(): void {
    this.loadPage();
  }

  loadPage(): void {
    this.loading = true;
    this.error = '';
    const offset = (this.page - 1) * this.itemsPerPage;

    this.dataService.getTrending(this.itemsPerPage, offset).subscribe({
      next: (res) => {
        this.gifs = res?.data ?? [];
        this.total = res?.pagination?.total_count ?? 0;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los GIFs. Intenta de nuevo.';
        this.loading = false;
      },
    });
  }

  onPageChange(p: number): void {
    this.page = p;
    this.loadPage();
  }

  selectGif(gif: any): void {
    this.selectedGifId = gif.id;
    this.sharedData.setSelectedGif(gif);
  }

  isSelected(gif: any): boolean {
    return gif.id === this.selectedGifId;
  }
}
