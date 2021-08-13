import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Member } from '../member';
@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers() {
    this.members = this.dataService.getMembers();
  }

  onClick(member: Member) {
    console.log(member)
  }
}
