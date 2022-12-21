# Instructions&nbsp; ![Advanced](https://img.shields.io/badge/Advanced-yellow)

## Challenge -

Implement a custom **`<InfiniteScroll />`** component that allows a user to scroll through a large list of items by only rendering a small number of items at a time. The component should load new items from a provided fetchData function when the user scrolls to the bottom of the list.

**Here is a rough outline of the component's behavior** :-

1. The **`<InfiniteScroll />`** component renders a list of items.

2. When the user scrolls to the bottom of the list, the
   **`<InfiniteScroll />`** component calls the **`fetchData`** function to retrieve additional items.

3. The **`<InfiniteScroll />`** component appends the new items to the list and re-renders.

4. Steps 2 and 3 are repeated until the fetchData function returns an empty array or an error.
