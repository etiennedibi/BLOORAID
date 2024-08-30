import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { TeamsComponent } from './teams/teams.component';
import { PartnersComponent } from './partners/partners.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ProductsComponent } from './products/products.component';
import { CptrainingComponent } from './cptraining/cptraining.component';
import { CptourComponent } from './cptour/cptour.component';
import { CpdayComponent } from './cpday/cpday.component';
import { PrayerMeetingComponent } from './prayer-meeting/prayer-meeting.component';
import { PosterComponent } from './poster/poster.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'introduce', component: IntroduceComponent },
  { path: 'team', component: TeamsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'library', component: ActivitiesComponent },
  { path: 'bloostore', component: ProductsComponent },
  { path: 'bloostore/cptraining', component: CptrainingComponent },
  { path: 'bloostore/cptour', component: CptourComponent },
  { path: 'cpday', component: CpdayComponent },
  { path: 'prayer', component: PrayerMeetingComponent },
  { path: 'poster', component: PosterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
