/* 
# Instructions &nbsp;

Implement a component that displays a list of users fetched from an API. The component should display a loading spinner while the data is being fetched, and an error message if there is an error.

Use the **`fetch`** function to retrieve the data from the following API endpoint: **`https://jsonplaceholder.typicode.com/users`**.

## Requirements:

- The component should use React Suspense to manage the loading state and display the spinner.
- The component should handle errors using a try-catch block.
- The component should display the list of users in a table, with each row showing the user's name and email address.

*/

import Instructions from '../components-readonly/Instructions';
import ASuspenseInfo from '../markdown/SusupenseA.md';

const ASuspense = () => {
  return (
    <>
      <Instructions renderData={ASuspenseInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default ASuspense;
