import { Component, OnInit, Injector } from '@angular/core';
import { GalleriesService } from '../../../shared/services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-all-galleries',
  templateUrl: './all-galleries.component.html'
})
export class AllGalleriesComponent implements OnInit {

  private galleries: any[] = [];
  private galleriesService : GalleriesService;

  constructor(private injector: Injector) {
    this.galleriesService = this.injector.get(GalleriesService);
    this.galleriesService.getGalleries().subscribe(
      data => {
        this.galleries = data;
      },
      (err: HttpErrorResponse) => {
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      }
    );
  }

  ngOnInit() {
  }

}
