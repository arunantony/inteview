/**
  ## Requirements

1. The table should have a header row with the names of each field in the JSON object
2. The table should have a row for each object in the JSON array
3. The table should be sortable by clicking on the header of a column
4. The table should be searchable using a text input field that filters the rows by the values in the cells

Here is an example of what the table might look like:

| id  | first name | last name | email              | gender | ip address   |
| --- | ---------- | --------- | ------------------ | ------ | ------------ |
| 1   | Alice      | Smith     | asmith@gmail.com   | Female | 123.45.67.89 |
| 2   | Bob        | Jones     | bjones@gmail.com   | Male   | 123.45.67.88 |
| 3   | Charlie    | Johnson   | cjohnson@gmail.com | Male   | 123.45.67.87 |

Here is the sample data

```json
const data = [
  { id: 1, first_name: "Alice", last_name: "Smith", email: "asmith@gmail.com", gender: "Female", ip_address: "123.45.67.89" },
  { id: 2, first_name: "Bob", last_name: "Jones", email: "bjones@gmail.com", gender: "Male", ip_address: "123.45.67.88" },
  { id: 3, first_name: "Charlie", last_name: "Johnson", email: "cjohnson@gmail.com", gender: "Male", ip_address: "123.45.67.87" },
  { id: 4, first_name: "Debbie", last_name: "Williams", email: "dwilliams@gmail.com", gender: "Female", ip_address: "123.45.67.86" },
  { id: 5, first_name: "Edward", last_name: "Brown", email: "ebrown@gmail.com", gender: "Male", ip_address: "123.45.67.85" }
];

```

**/

import Instructions from '../components-readonly/Instructions';
import TableSearchSortInfo from '../markdown/TableSearchSort.md';

const TableSearchSort = () => {
  return (
    <div>
      <Instructions renderData={TableSearchSortInfo} />
      {/* You code goes inside this div */}
    </div>
  );
};

export default TableSearchSort;
