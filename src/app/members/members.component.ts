import { Component, OnInit } from '@angular/core';
import { Member, DataService } from '../data.service';

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
    this.dataService.getMembers().subscribe(
      members => this.members = members
    )
  }

  onClick(member: Member) {
    console.log(member)
  }

}
