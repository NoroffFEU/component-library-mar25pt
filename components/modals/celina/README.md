# Manage Account Modal

A tabbed modal dialog for account management, with a Settings tab and a Delete Account tab, overlay backdrop, and keyboard support.

## How to use

Copy the `.modal-overlay` and trigger button HTML. Include `style.css` and `script.js`. The modal opens on the Settings tab when the trigger button is clicked, switches tabs on click, and closes on Cancel, Escape key, or clicking the overlay backdrop.

## Design decisions

- Uses `aria-modal="true"` and `role="dialog"` for screen reader support
- Overlay click closes the modal (but clicking inside the modal doesn't)
- Escape key closes the modal for keyboard users
- Tab navigation lets Settings and Delete Account share a single modal shell instead of two separate dialogs
- Destructive action (confirm) is styled in red to signal caution

## Credits

- Tab navigation CSS (`.tabs`, `.tabs__nav`, `.tabs__button`, `.tabs__panel`, etc.) adapted from code by **Jose**.

## Known limitations

- Focus is not trapped inside the modal — Tab can reach elements behind it
- No stacking support for multiple modals
