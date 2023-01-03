/* 
# Instructions

## Challenge: Material UI Form.

## - Use Material-UI to create a form that allows a user to input their name and email address. The form should have the following features:

1. A text field for the user's name
2. A text field for the user's email address
3. A submit button that is disabled until both the name and email fields have been filled in
4. Validation to ensure that the email field contains a valid email address

 */

import Instructions from '../components-readonly/Instructions';
import MaterialUIFormInfo from '../markdown/MaterialUIForm.md';

const MaterialUIForm = () => {
  return (
    <>
      <Instructions renderData={MaterialUIFormInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default MaterialUIForm;
