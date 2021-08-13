import { Injectable } from '@angular/core';
import { Observable, of, scheduled } from 'rxjs';


export class Project {
  id: number;
  image: string;
  name: string;
  simple_description: string;
  url_path: string;

  constructor(id: number, image: string, name: string, simple_description: string, url_path: string) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.simple_description = simple_description;
    this.url_path = url_path;
  }
}

export class Member {
  id: number;
  image: string;
  name: string;
  simple_bio: string;
  url_path: string;

  constructor(id: number, image: string, name: string, simple_bio: string, url_path: string) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.simple_bio = simple_bio;
    this.url_path = url_path;
  }
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: Project[] = []
  members: Member[] = []


  constructor() {
    let example_project = new Project(0, "assets/ProjectImages/Spot.jpg", "Example project", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis dapibus metus, id sodales est. Proin ut diam purus. Curabitur bibendum est dignissim, varius lectus a, commodo nisl. Maecenas lobortis egestas risus, a eleifend odio efficitur sed. Mauris quis vulputate ante, posuere egestas ipsum.", "");
    let example_member = new Member(0, "assets/MemberImages/John.jpg", "John", "A Cs Student", "")

    this.projects.push(example_project);
    this.projects.push(example_project);
    this.projects.push(example_project);

    this.members.push(example_member);
    this.members.push(example_member);
    this.members.push(example_member);
  }

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getMembers(): Observable<Member[]> {
    return of(this.members);
  }
}
