# Hover + Focus Tooltip

A pure-CSS tooltip that appears above an element on hover _and_ on keyboard focus.

## How to use

Add class="tooltip-trigger" and a data-tooltip="Your message" attribute to any
element, and include style.css. The tooltip text comes from the data-tooltip
attribute, so no extra HTML is needed.

`<button class="tooltip-trigger" data-tooltip="More text here">Your text here</button>`

For elements that aren't natively focusable (e.g. a <span>), add tabindex="0"
so the tooltip is reachable with the keyboard.

## Design decisions

- Pure CSS using the ::after pseudo-element — no JavaScript required.
- attr(data-tooltip) reads the tooltip text from the HTML attribute.
- Arrow created with CSS borders on the ::before pseudo-element.
- Scale + opacity transition for a smooth pop-in effect.
- Shown on both :hover and :focus-visible, so it works with mouse and keyboard.
  :focus-visible (rather than :focus) keeps the tooltip from sticking after a
  mouse click.
- Dark box (#1f2937) on light text (#f9fafb) for ~15:1 contrast.
- max-width + white-space: normal so long text wraps instead of overflowing.
- prefers-reduced-motion respected — the pop-in animation is dropped for users
  who ask for less motion.

## Known limitations

- Tooltip always appears _above_ the trigger. There is no auto-flip for elements
  near the top edge of the viewport — that would require JavaScript to measure
  position. The demo keeps triggers away from the edges so nothing is clipped.
- The tooltip is presentational only; it does not set aria-describedby. For full
  screen-reader support you'd pair it with a matching ARIA attribute (out of scope
  for a CSS-only component).
