import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavigationComponent } from './navigation/navigation.component';
// import { CurrencyModule } from './currency/currency.module';
// import { WeatherModule } from './weather/weather.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [ 
  { path: '', component: AppComponent, pathMatch: 'full' },
//   { path: 'navigationTest', component: NavigationComponent}
    { path: 'Currency', component: CurrencyComponent},
    { path: 'Weather', component: WeatherComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }