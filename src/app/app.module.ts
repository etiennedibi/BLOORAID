import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IntroduceComponent } from './introduce/introduce.component';
import { ProductsComponent } from './products/products.component';
import { TeamsComponent } from './teams/teams.component';
import { PartnersComponent } from './partners/partners.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CptrainingComponent } from './cptraining/cptraining.component';
import { CptourComponent } from './cptour/cptour.component';
import { ElearningComponent } from './elearning/elearning.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IntroduceComponent,
    ProductsComponent,
    TeamsComponent,
    PartnersComponent,
    ActivitiesComponent,
    CptrainingComponent,
    CptourComponent,
    ElearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
