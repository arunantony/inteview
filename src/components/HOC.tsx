/* 
# Instructions&nbsp; ![Advanced](https://img.shields.io/badge/Advanced-yellow)

## Challenge -

### Requirements

- Implement or Mock a Higher Order Component (HOC) with hooks
- you can choose logical implemenatino
- Try to use "with" prefix with component name

*/

import Instructions from '../components-readonly/Instructions';
import AHOCInfo from '../markdown/Advanced_HOC.md';

const HOC = () => {
  return (
    <>
      <Instructions renderData={AHOCInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default HOC;
