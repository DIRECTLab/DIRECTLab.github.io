import { Component, OnInit } from '@angular/core';
import { DataService, Project } from 'src/app/data.service';

@Component({
  selector: 'app-all-research',
  templateUrl: './all-research.component.html',
  styleUrls: ['./all-research.component.css']
})
export class AllResearchComponent implements OnInit {
  projects: Project[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.dataService.getProjects().subscribe(
      projects => this.projects = projects
    )
  }

  onClick(project: Project) {
    console.log(project);
  }

}
