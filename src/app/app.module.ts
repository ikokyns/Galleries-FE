import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/layout/navbar.component';
import { MainComponent } from './components/layout/main/main.component';
import { SharedModule } from './shared/shared.module';
import { MyGalleriesComponent } from './components/layout/my-galleries/my-galleries.component';
import { CreateGalleriesComponent } from './components/layout/create-galleries/create-galleries.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AllGalleriesComponent } from './components/layout/all-galleries/all-galleries.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    MainComponent,
    MyGalleriesComponent,
    CreateGalleriesComponent,
    LogoutComponent,
    AllGalleriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
