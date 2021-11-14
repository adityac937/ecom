import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrushesComponent } from './brushes/brushes.component';
import { DashboardCarouselComponent } from './dashboard-carousel/dashboard-carousel.component';
import { LipsticksComponent } from './lipsticks/lipsticks.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard',pathMatch:'full'

  },
  {
    path: 'dashboard', component: DashboardCarouselComponent
  },
  {
    path: 'brushes', component: BrushesComponent
  },
  {
    path:'lipsticks',component:LipsticksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
