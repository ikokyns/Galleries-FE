import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/guards/auth.guard';
import { GuestGuard } from '../shared/guards/guest.guard';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { RegisterComponent } from '../components/register/register.component';
import { MyGalleriesComponent } from '../components/layout/my-galleries/my-galleries.component';
import { CreateGalleriesComponent } from '../components/layout/create-galleries/create-galleries.component';
import { LogoutComponent } from '../components/logout/logout.component';
import { AllGalleriesComponent } from '../components/layout/all-galleries/all-galleries.component';

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
		path: 'all',
		canActivate: [AuthGuard],
		component: AllGalleriesComponent
	},
	{
		path: 'my-galleries',
		canActivate: [AuthGuard],
		component: MyGalleriesComponent
	},
	{
		path: 'create',
		canActivate: [AuthGuard],
		component: CreateGalleriesComponent
	},
	{
		path: 'logout',
		canActivate: [AuthGuard],
		component: LogoutComponent
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
