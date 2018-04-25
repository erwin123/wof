import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BundleComponent } from './bundle/bundle.component';
import { LandingComponent} from './landing/landing.component';
import { SimulateComponent} from './simulate/simulate.component';
import { OrderComponent} from './order/order.component';

const appRoutes: Routes = [
  { path: 'bundle', redirectTo: 'bundle/landing' },
  { path: 'bundle', component: BundleComponent, 
  children: [
    { path: 'landing', component: LandingComponent},
    { path: 'simulate', component: SimulateComponent},
    { path: 'order', component: OrderComponent},
  ]},
  

  // otherwise redirect to home
  { path: '**', redirectTo: 'bundle/landing' },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}