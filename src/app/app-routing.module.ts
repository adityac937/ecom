import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrushesComponent } from './brushes/brushes.component';
import { CleanserComponent } from './cleanser/cleanser.component';
import { DashboardCarouselComponent } from './dashboard-carousel/dashboard-carousel.component';
import { HairCareComponent } from './hair-care/hair-care.component';
import { LipBalmComponent } from './lip-balm/lip-balm.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { MoisturizerComponent } from './moisturizer/moisturizer.component';
import { ProductsComponent } from './products/products.component';
import { SunScreenComponent } from './sunscreen/sunscreen.component';
import { TonerComponent } from './toner/toner.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'

  },
  {
    path: 'dashboard', component: DashboardCarouselComponent
  },
  {
    path: 'brushes', component: BrushesComponent
  },
  {
    path: 'lipsticks', component: LipsticksComponent
  },
  {
    path: 'cleanser', component: CleanserComponent
  }, {
    path: 'hair-care', component: HairCareComponent
  }, {
    path: 'lip-balm', component: LipBalmComponent
  },{
    path:'toner',component:TonerComponent
  },{
    path:'sunscreen',component:SunScreenComponent
  },{
    path:'moisturizer',component:MoisturizerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
