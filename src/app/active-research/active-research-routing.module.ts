import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllResearchComponent } from './all-research/all-research.component';

const routes: Routes = [
  {
    path: "all_research",
    component: AllResearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveResearchRoutingModule { }
