/**
  Challenge: Display a list of user users to the browser
  Hints: 
  1. Use array map with react key
  2. Use the jsonplaceholder api to fetch data -> https://jsonplaceholder.typicode.com/users
  3. Use either "fetch" or "axios"
**/

import Instructions from '../components-readonly/Instructions';
import TablebuilderInfo from '../markdown/TableBuilder.md';

const TableBuilder = () => {
  return (
    <div>
      <Instructions renderData={TablebuilderInfo} />
      {/* You code goes inside this div */}
    </div>
  );
};

export default TableBuilder;
