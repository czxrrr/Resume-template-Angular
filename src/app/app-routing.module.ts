import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent }    from './not-found.component';
import { WorkComponent } from "./work/work.component";
import { EduComponent }  from "./edu/edu.component";
import { ContactComponent }  from "./contact/contact.component";
import {SkillComponent} from "./skill/skill.component";

const appRoutes: Routes = [
  { path: '',  component: WorkComponent},
  { path: 'work',  component: WorkComponent},
  { path: 'edu',  component: EduComponent},
  { path: 'contact',  component: ContactComponent},
  { path: 'skill',  component: SkillComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
