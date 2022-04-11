import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-screen',
  templateUrl: './services-screen.component.html',
  styleUrls: ['./services-screen.component.css']
})
export class ServicesScreenComponent implements OnInit {
  
  services: string[] = ['Design', 'Desenvolvimento', 'consultoria', 'Marketing'];

  constructor() { }

  ngOnInit(): void {
  }

}