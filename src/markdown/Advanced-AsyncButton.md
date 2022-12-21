# Instructions&nbsp; ![Advanced](https://img.shields.io/badge/Advanced-yellow)

Implement a custom **`<AsyncButton />`** component that allows a user to trigger an async action by clicking a button. The component should display a loading indicator while the action is being performed, and should handle errors if the action fails. The component should also accept a **`label`** prop to display the button's text.

## Requirement

**Here is a rough outline of the component's behavior** :-

1. When the user clicks the button, the **`<AsyncButton />`** component calls the provided onClick function.

2. The **`<AsyncButton />`** component displays a loading indicator while the onClick function is being executed.

3. If the onClick function succeeds, the **`<AsyncButton />`** component hides the loading indicator and displays a success message.

4. If the onClick function fails, the **`<AsyncButton />`** component hides the loading indicator and displays an error message.
