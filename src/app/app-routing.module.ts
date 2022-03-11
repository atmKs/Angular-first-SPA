import { ApolloComponent } from './component/apollo/apollo.component';
import { CountryInfoComponent } from './component/country-info/country-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ApolloComponent,
  },
  { path: ':country', component: CountryInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
