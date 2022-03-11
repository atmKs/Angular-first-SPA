import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { COUNTRY_DESCRIPTION } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss'],
})
export class CountryInfoComponent implements OnInit {
  countriesInfo: any;

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.apollo
        .watchQuery({
          query: COUNTRY_DESCRIPTION,
          variables: {
            code: params.country,
          },
        })
        .valueChanges.subscribe((responce: any) => {
          this.countriesInfo = responce.data.country;
        });
    });
  }
}
