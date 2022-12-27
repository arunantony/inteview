[Back to Home]('/')

# Instructions

## Challenge: Component With Grid Layout

## Requirements

- Create a simple React component that displays a list of items in a grid layout.
- Each item should have a title and an image. The component should have the following features:

1. When the mouse hovers over an item, the item's background color should change to a highlight color.
2. When the mouse leaves the item, the background color should return to the default color.
3. When an item is clicked, it should toggle between a "selected" state and a "not selected" state.
4. When an item is in the "selected" state, its border should be a different color than when it is in the "not selected" state.

Here is some sample data for the list of items:

```javascript
const items = [
  {
    id: 1,
    title: 'Item 1',
    image: 'https://via.placeholder.com/150x100',
  },
  {
    id: 2,
    title: 'Item 2',
    image: 'https://via.placeholder.com/150x100',
  },
  {
    id: 3,
    title: 'Item 3',
    image: 'https://via.placeholder.com/150x100',
  },
  {
    id: 4,
    title: 'Item 4',
    image: 'https://via.placeholder.com/150x100',
  },
];
```

file path: [src/components/CSSGrid.tsx](src/components/CSSGrid.tsx)
