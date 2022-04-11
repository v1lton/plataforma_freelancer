import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freelancers-screen',
  templateUrl: './freelancers-screen.component.html',
  styleUrls: ['./freelancers-screen.component.css']
})
export class FreelancersScreenComponent implements OnInit {

  service: string;
  freelancers: Freelancer[] = [new Freelancer("Wilton Ramos",4), new Freelancer("Vinicius Scala", 5), new Freelancer("Marcos", 1), new Freelancer("Marta", 2), new Freelancer("João",4)];
  filteredFreelancers: Freelancer[] = []
  isFiltered: boolean = false;

  constructor() { 
    this.service = "UX";
  }

  ngOnInit(): void {
  }

  hire(){
  }

  sortByBestScores() {
    this.filteredFreelancers.sort((a,b) => b.score - a.score);
    this.freelancers.sort((a,b) => b.score - a.score);
  }

  sortByWorstScore() {
    this.filteredFreelancers.sort((a,b) => a.score - b.score);
    this.freelancers.sort((a,b) => a.score - b.score);
  }

  sortByName() {
    this.filteredFreelancers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    this.freelancers.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
  }

  filterBy(numberOfStars: number) {
    this.isFiltered = true;
    this.filteredFreelancers = this.freelancers.filter((freelancer) => freelancer.score >= numberOfStars);
  }

  cleanFilters() {
    this.isFiltered = false;
    this.filteredFreelancers = [];
  }

  navigateToCreateService() {

  }
}

class Freelancer {
  name: string;
  score: number;
  email: string;
  services: string[];

  constructor(name: string, score: number) {
    this.name = name;
    this.score = score;
    this.email = "oioi@gmail.com";
    this.services = [];
  }

  getScore() {
    return this.score.toString() + " estrelas de 5";
  }
}
