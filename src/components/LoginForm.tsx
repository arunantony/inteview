/* 
# Instructions&nbsp;

## Challenge - Simple Login Component

### Requirements

1. Implement a simple login form that allows a user to enter their email and password,
   and displays an error message if the login fails.

2. The form should also include a "Remember me" checkbox

3. when checked, stores the user's email in a cookie for future visits.

*/

import Instructions from '../components-readonly/Instructions';
import LoginFormInfo from '../markdown/LoginForm.md';

const LoginForm = () => {
  return (
    <>
      <Instructions renderData={LoginFormInfo} />
      <div>{/* Your code goes here */}</div>
    </>
  );
};

export default LoginForm;
