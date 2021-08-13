import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabMembersRoutingModule } from './lab-members-routing.module';
import { MembersComponent } from './members/members.component';


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    LabMembersRoutingModule
  ]
})
export class LabMembersModule { }
