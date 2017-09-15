import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { AuthService } from './../../shared/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	@Output() onSubmit = new EventEmitter<User>();

	private newUser: User = new User();

	constructor(private authService: AuthService, private router: Router) { }

	register (newUser)
	{
	this.authService.register(newUser)
		.subscribe(
  			() => {
  				this.router.navigateByUrl('/');
  			},
  			(err: HttpErrorResponse) => {
  				alert(`${err.error.error}`);
  			}
  		);
  }

	ngOnInit() {
	}

}
