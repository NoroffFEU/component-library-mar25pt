# Interactive Action Toast

A toast notification with an optional user action.

## How to use

Call `showActionToast(title, message, actionText, actionCallback)` from JavaScript.

```js
showActionToast(
  "Item deleted",
  "The item has been removed from your list.",
  "Undo",
  function () {
    console.log("Delete action undone");
  }
);
```

## Design decisions

- Fixed position in the top-right corner
- Auto-dismisses after 5 seconds
- Includes a progress indicator
- User can dismiss the toast manually
- Supports an optional action button
- The toast can update its content after the action is triggered

## Example interaction

1. The toast shows an "Item deleted" message.
2. The user can click "Undo".
3. The toast changes to "Item restored".
4. The toast closes automatically shortly after.

## Known limitations

- Designed for a single action per toast
- Multiple toasts stack vertically
- The demo currently uses an Undo action