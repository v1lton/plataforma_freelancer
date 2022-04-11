import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedbackScreenComponent } from './feedback-screen/feedback-screen.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { ServicesScreenComponent } from './services-screen/services-screen.component';
import { FreelancersScreenComponent } from './freelancers-screen/freelancers-screen.component';
import { CreateServiceScreenComponent } from './create-service-screen/create-service-screen.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeedbackScreenComponent,
    LoginScreenComponent,
    ServicesScreenComponent,
    FreelancersScreenComponent,
    CreateServiceScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
