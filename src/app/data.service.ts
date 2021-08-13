import { Injectable } from '@angular/core';
import { Member } from './lab-members/member';
import { Research } from './active-research/research';
import { allMembers } from './lab-members/all-members';
import { allResearchProjects } from './active-research/all-research-projects';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allResearch: Research[] = []
  members: Member[] = []

  constructor() {
    this.allResearch = allResearchProjects;
    this.members = allMembers
  }

  getAllResearch(): Research[] {
    return this.allResearch;
  }

  getMembers(): Member[] {
    return this.members;
  }
}
