import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveResearchRoutingModule } from './active-research-routing.module';
import { AllResearchComponent } from './all-research/all-research.component';


@NgModule({
  declarations: [
    AllResearchComponent
  ],
  imports: [
    CommonModule,
    ActiveResearchRoutingModule
  ]
})
export class ActiveResearchModule { }
