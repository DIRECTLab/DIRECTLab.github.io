import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ActiveResearchModule } from './active-research/active-research.module';
import { LabMembersModule } from './lab-members/lab-members.module';

import { SharedModule } from './shared/shared.module';
import { OutreachComponent } from './outreach/outreach.component';
import { ContactComponent } from './contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OutreachComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    ActiveResearchModule,
    LabMembersModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
