import { Component, OnInit } from '@angular/core';
import { DataService, Project } from '../data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
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
