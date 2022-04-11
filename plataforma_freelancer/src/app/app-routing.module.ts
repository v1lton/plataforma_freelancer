import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServiceScreenComponent } from './create-service-screen/create-service-screen.component';
import { FeedbackScreenComponent } from './feedback-screen/feedback-screen.component';
import { FreelancersScreenComponent } from './freelancers-screen/freelancers-screen.component';
import { ServicesScreenComponent } from './services-screen/services-screen.component';

const routes: Routes = [
  { path: '', component: ServicesScreenComponent },
  { path: 'freelancers/:service', component: FreelancersScreenComponent },
  { path: 'feedback', component: FeedbackScreenComponent },
  { path: 'create', component: CreateServiceScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
