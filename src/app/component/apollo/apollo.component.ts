import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { COUNTRIES_DESCRIPTION } from 'src/app/graphql/graphql.queries';

@Component({
  selector: 'app-apollo',
  templateUrl: './apollo.component.html',
  styleUrls: ['./apollo.component.scss'],
})
export class ApolloComponent implements OnInit {
  public countriesList: any[] = [];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) {}
  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: COUNTRIES_DESCRIPTION,
      })
      .valueChanges.subscribe((responce: any) => {
        this.countriesList = responce?.data?.countries;
        this.loading = responce.loading;
        this.error = responce.error;
      });
  }
}
