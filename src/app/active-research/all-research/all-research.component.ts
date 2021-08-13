import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Research } from '../research';

@Component({
  selector: 'app-all-research',
  templateUrl: './all-research.component.html',
  styleUrls: ['./all-research.component.css']
})
export class AllResearchComponent implements OnInit {
  allResearch: Research[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.allResearch = this.dataService.getAllResearch();
  }

  onClick(research: Research) {
    console.log(research);
  }

}
