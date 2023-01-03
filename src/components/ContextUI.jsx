/* 
# Instructions

- Challenge: Using Context API

# Requirments

1.  Create a react context which can pass users to other components
2.  Use data [jsonplaceholder](https://jsonplaceholder.typicode.com/users) for context.
3.  Get the data from the context to a component and display the array of users

*/

import Instructions from '../components-readonly/Instructions';
import ContextInfo from '../markdown/Context.md';

const ContextUI = () => {
  return (
    <>
      <Instructions renderData={ContextInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default ContextUI;
