/* 
Challenge: Create a controlled component.
 - Hints

1.Form with 2 inputs (name,password) etc.
2. Use a single useState and handleFunction for handle input values and change handlers
3. If possible create a custom hook for use input data.
*/

import Instructions from '../components-readonly/Instructions';
import ControlledData from '../markdown/Controlled.md';

const Controlled = () => {
  return (
    <>
      <Instructions renderData={ControlledData} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default Controlled;
