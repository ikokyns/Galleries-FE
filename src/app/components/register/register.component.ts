import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
	@Output() onSubmit = new EventEmitter<User>();

	private newUser: User = new User();

	constructor() { }

	submitUser(user: User) {
		this.onSubmit.emit(user);
 		this.newUser = new User();
	}

	ngOnInit() {
	}

}
