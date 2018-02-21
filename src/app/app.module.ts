import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatCardModule, MatChipsModule, MatExpansionModule, MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PageNotFoundComponent }   from './not-found.component';
import { WorkComponent } from './work/work.component';
import { EduComponent } from './edu/edu.component';
import { ContactComponent } from './contact/contact.component';
import { SkillComponent } from './skill/skill.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    WorkComponent,
    EduComponent,
    ContactComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatExpansionModule,
    MatChipsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
