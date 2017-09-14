import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/',
		pathMatch: 'full'
	},
	{
		path: 'login',
		canActivate: [GuestGuard],
		component: LoginComponent
	},
	{
		path: 'register',
		canActivate: [GuestGuard],
		component: RegisterComponent
	},
	{
		path: 'my-galleries',
		canActivate: [AuthGuard],
		component: RegisterComponent
	},
	{
		path: 'create',
		canActivate: [AuthGuard],
		component: RegisterComponent
	}

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
