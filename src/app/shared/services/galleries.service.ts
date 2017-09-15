import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallerie } from '../models/gallerie.model';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GalleriesService {


	private galleries: Gallerie[] = [];	
	
	constructor(private http: HttpClient, private authService: AuthService) { }

	public getGalleries()
	{
		return new Observable((o: Observer<any>) => {
			this.http.get('http://localhost:8000/api/all', {
        		headers: this.authService.getRequestHeaders(),
        	})
        	.subscribe(
				(galleries: any[]) => {
					galleries.forEach(g => {
						this.galleries.push(new Gallerie(g.id, g.name, g.description));
					});
					o.next(this.galleries);
					return o.complete();
					}
			);
		});
	}

	public addGallerie(gallerie: Gallerie)
	{
		return new Observable((o: Observer<any>) => {
			this.http.post('http://localhost:8000/api/gallerie', {
				'name': gallerie.name,
				'description': gallerie.description				
			},
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				(g: any) => {
					let newG = new Gallerie(g.id, g.name, g.description);
					this.galleries.push(newG);
					o.next(newG);
					return o.complete();
				}
			);
		});
	}

	public removeGallerie(gallerie: Gallerie)
	{
		return new Observable ((o: Observer<any>) => {
			this.http.delete('http://localhost:8000/api/galleries/' + gallerie.id,
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				() => {
					const index = this.galleries.indexOf(gallerie);
					this.galleries.splice(index, 1);

					o.next(index);
					return o.complete();
				}
			);
		});
	}

	public getGallerieById(id: number)
	{
		return new Observable((o: Observer<any>) => {
			this.http.get('http://localhost:8000/api/galleries/' + id,
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				(gallerie: any) => {
					o.next(new Gallerie(gallerie.id, gallerie.name, gallerie.description));
					return o.complete();
				})
		})
	}
}