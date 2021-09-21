import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveResearchRoutingModule } from './active-research-routing.module';
import { AllResearchComponent } from './all-research/all-research.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AllResearchComponent
  ],
  imports: [
    CommonModule,
    ActiveResearchRoutingModule,
    SharedModule
  ]
})
export class ActiveResearchModule { }
