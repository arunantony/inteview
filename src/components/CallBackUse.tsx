/* 
# Instructions &nbsp;

## - Challenge: Display Array of users to the browser

1. You are building a performance-critical application that displays a list of items.

2. The list of items is stored in a remote database and is updated frequently.

3. You want to make sure that the list is re-rendered as efficiently as possible when the data changes.

4. Write the code to the **`useCallBack()`** for memoize. (you can the mock the code with the api also but should convey the callback usage)

*/

import Instructions from '../components-readonly/Instructions';
import CallBackUseInfo from '../markdown/CallBackUse.md';

const CallBackUse = () => {
  return (
    <>
      <Instructions renderData={CallBackUseInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default CallBackUse;
