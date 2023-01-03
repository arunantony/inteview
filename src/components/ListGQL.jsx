/**
 * ## Challenge: Display Array of Starwar Movies and Directors in a card

## **Hints**

> The Star Wars API (SWAPI) is a public GraphQL API for retrieving
> information about Star Wars movies, characters, and planets. Here is
> an example of how you could use SWAPI with a React application:

1. Use [SWAPi](http://graphql.org/swapi-graphql) for fetch data
2. Use the below query to get data from the api

```graphql
query getDirectorsAndMovies {
  allFilms {
    films {
      director
      title
    }
  }
}
```

3. use `useQuery` from `@pollo/react-hooks` and `gql` from `graphql-tag`

```jsx
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
```

4. Use array **`map`** with react **`key`**

---

**/

import Instructions from '../components-readonly/Instructions';
import ListGQLInfo from '../markdown/ListGQL.md';

const ListGQL = () => {
  return (
    <div>
      <Instructions renderData={ListGQLInfo} />
      {/* You code goes inside this div */}
    </div>
  );
};

export default ListGQL;
