import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable()
export class AuthService {

	public isAuthenticated: boolean;

	public user: User[] = [];

	constructor(private http: HttpClient){
		this.isAuthenticated = !!window.localStorage.getItem('loginToken');
	}

	public login(email: string, password: string)
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

	public register(user: User)
	{
		return new Observable((o: Observer<any>) => {
			this.http.post('http://localhost:8000/api/register', {
				'firstName': user.firstName,
				'lastName': user.lastName,
				'email': user.email,
				'password': user.password,
			},
			{
				headers: this.getRequestHeaders(),
			})
			.subscribe(
				(u: any) => {
 					let newU = new User(u.id, u.first_name, u.last_name, u.email, u.password);
					this.user.push(newU);
					o.next(newU);
            		return o.complete();
          		}
          	)
		});
	}

	public getRequestHeaders()
	{
		let token = window.localStorage.getItem('LoginToken');
		return new HttpHeaders().set('Authorization', `Bearer ${token}`);
	}

	public logout()
	{
		window.localStorage.removeItem('loginToken');
		this.isAuthenticated = false;	
	}
}
