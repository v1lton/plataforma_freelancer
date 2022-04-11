import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackScreenComponent } from './feedback-screen/feedback-screen.component';
import { FreelancersScreenComponent } from './freelancers-screen/freelancers-screen.component';
import { ServicesScreenComponent } from './services-screen/services-screen.component';

const routes: Routes = [
  { path: 'freelancers/:service', component: FreelancersScreenComponent },
  { path: 'services', component: ServicesScreenComponent },
  { path: 'feedback', component: FeedbackScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
