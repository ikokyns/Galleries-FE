import { Component, OnInit, Injector } from '@angular/core';
import { GalleriesService } from '../../../shared/services/galleries.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

	// private galleries: any[] = [];
	// private galleriesService: GalleriesService;

	// constructor(private injector: Injector) {
	// 	this.galleriesService = this.injector.get(GalleriesService);
	// 	this.galleriesService.getGalleries().subscribe(
	// 		data => {
	// 			this.galleries = data;
	// 		},
	// 		(err: HttpErrorResponse) => {
	// 			alert(`Backend returned code ${err.status} where message: ${err.error}`);
	// 		}
	// 	);
	// }

	ngOnInit() {
	}

}
