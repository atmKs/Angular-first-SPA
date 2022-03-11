import { Component, Input, OnInit } from '@angular/core';

const continents = [
  'Africa',
  'Antarctica',
  'Asia',
  'Europe',
  'North America',
  'Oceania',
  'South America',
];
const currency = ['EUR', 'USD', 'GBR'];
@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  @Input() countries: any;
  searchCountry?: string = '';
  continentFilter: string = '';
  currencySelect: string = '';
  continentOptions = continents;
  currencyOptions = currency;
  page: number = 1;
  constructor() {}

  ngOnInit(): void {}
  get Countries() {
    return this.countries
      ? this.countries
          .filter((country: any) =>
            this.searchCountry
              ? country.name
                  .toLowerCase()
                  .includes(this.searchCountry.toLowerCase())
              : country
          )
          .filter((country: any) =>
            this.continentFilter
              ? country.continent.name.includes(this.continentFilter)
              : country
          )
      : this.countries;
  }
}
