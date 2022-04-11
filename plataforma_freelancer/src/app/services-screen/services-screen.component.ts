import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.css']
})
export class ServicesScreenComponent implements OnInit {
  
  services: string[] = ['Design', 'Desenvolvimento', 'Consultoria', 'Marketing'];

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigateToFreelancers(forService: string) {
    this.router.navigate(['/freelancers/' + forService]);
  }
}