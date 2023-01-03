/* 
# Instructions&nbsp; ![medium](https://img.shields.io/badge/Difficulty-Medium-yellow)

- Challenge: FizzBuzz

## Requirements

- Create twenty buttons in a component.
- Label each button 1 to 20 respectivly
- When we press and hold the button rename them followingly:
  - **Fizz** to label divisible by 2
  - **Fizz** to label divisible by 3
  - **FizzBuzz** to label divisible by 2 and 3
- Dont use for loop or map to generate the array

*/

import Instructions from '../components-readonly/Instructions';
import FizzBuzzInfo from '../markdown/FizzBuzz.md';

const FizzBuzz = () => {
  return (
    <>
      <Instructions renderData={FizzBuzzInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default FizzBuzz;
