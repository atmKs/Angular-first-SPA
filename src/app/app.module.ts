import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './component/countries/countries.component';
import { GraphQLModule } from './graphql.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApolloComponent } from './component/apollo/apollo.component';
import { RadioFilterComponent } from './component/radio-filter/radio-filter.component';
import { CountryInfoComponent } from './component/country-info/country-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    ApolloComponent,
    RadioFilterComponent,
    CountryInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
