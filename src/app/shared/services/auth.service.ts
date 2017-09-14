import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

@Injectable()
export class AuthService {

	public isAuthenticated: boolean;

	constructor(private http: HttpClient){
		this.isAuthenticated = !!window.localStorage.getItem('loginToken');
	}

	login(email: string, password: string)
	{
		return new Observable((o: Observer<any>) => {
			this.http.post('http://localhost:8000/api/login', {
				'email': email,
				'password': password
			})
			.subscribe(
				(data: {token: string }) => {
				window.localStorage.setItem('LoginToken', data.token);
				this.isAuthenticated = true;

				o.next(data.token);
				return o.complete();
			}, (err) =>{
				return o.error(err);
			});
		});
	}

	public getRequestHeaders(){
		let token = window.localStorage.getItem('loginToken');
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	public logout()
	{
		window.localStorage.removeItem('loginToken');
		this.isAuthenticated = false;	
	}
}
