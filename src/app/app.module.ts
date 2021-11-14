import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrushesComponent } from './brushes/brushes.component';
import { CleanserComponent } from './cleanser/cleanser.component';
import { DashboardCarouselComponent } from './dashboard-carousel/dashboard-carousel.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LipBalmComponent } from './lip-balm/lip-balm.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { MoisturizerComponent } from './moisturizer/moisturizer.component';
import { ProductsComponent } from './products/products.component';
import { SunScreenComponent } from './sunscreen/sunscreen.component';
import { TonerComponent } from './toner/toner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavComponent,
    DashboardCarouselComponent,
    ProductsComponent,
    BrushesComponent,
    LipsticksComponent,
    CleanserComponent,
    HairCareComponent,
    LipBalmComponent,
    TonerComponent,
    SunScreenComponent,
    MoisturizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
