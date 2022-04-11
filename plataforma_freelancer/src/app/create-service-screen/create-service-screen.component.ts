import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-service-screen',
  templateUrl: './create-service-screen.component.html',
  styleUrls: ['./create-service-screen.component.css']
})
export class CreateServiceScreenComponent implements OnInit {

  service: Service; 

  constructor() { 
    this.service = new Service("",0,"");
  }

  ngOnInit(): void {
  }

}

class Service {
  name: string;
  price: number;
  description: string;

  constructor(name: string, price: number, description: string) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

}