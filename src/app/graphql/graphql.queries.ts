import { gql } from 'apollo-angular';

const COUNTRIES_DESCRIPTION = gql`
  {
    countries {
      code
      name
      currency
      continent {
        name
      }
    }
  }
`;

const COUNTRY_DESCRIPTION = gql`
  query Query($code: ID!) {
    country(code: $code) {
      code
      name
      currency
      capital
      native
      phone
      continent {
        name
        code
      }
    }
  }
`;

export { COUNTRIES_DESCRIPTION, COUNTRY_DESCRIPTION };
