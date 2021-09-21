import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabMembersRoutingModule } from './lab-members-routing.module';
import { MembersComponent } from './members/members.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MembersComponent
  ],
  imports: [
    CommonModule,
    LabMembersRoutingModule,
    SharedModule
  ]
})
export class LabMembersModule { }
