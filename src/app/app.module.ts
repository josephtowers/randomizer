import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { MembersComponent } from './members/members.component';
import { AudienceComponent } from './audience/audience.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MembersComponent,
    AudienceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
