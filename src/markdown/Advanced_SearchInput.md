[Back to Home](/)

# Instructions

- Challenge: Create a SearchInput Hook
- Use Typescript for extra credits

## Requirements

Implement a custom **`<SearchInput />`** component that allows a user to search for items by typing in a search input field. The component should debounce the search requests to prevent flooding the server with requests. The component should also accept a placeholder prop to display a placeholder in the input field and a onSearch prop to specify a callback function to be called when a search is performed.

**Here is a rough outline of the component's behavior:**

1. The **`<SearchInput />`** component renders an input field with a placeholder.

2. As the user types in the input field, the **`<SearchInput />`** component debounces the search requests by waiting for a specified amount of time before calling the onSearch function.

3. When the user stops typing or the debounce timeout is reached, the **`<SearchInput />`** component calls the onSearch function with the current value of the input field.

file path :[src/components/ASearchInput.jsx](src/components/ASearchInput.jsx)
