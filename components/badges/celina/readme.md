# Status Badge

Coloured pill-shaped badges for displaying status labels, with support for
text-only and text-with-icon variants.

## How to use

Both text-only and icon badges use the same BEM-style
`<span class="badge badge--{variant}">` element. Available variants:
`success`, `warning`, `danger`, `info`, `neutral`.

```html
<span class="badge badge--success">Active</span>
```

For an icon badge, add a [Heroicons](https://heroicons.com) SVG
(`class="badge__icon"`) before the text:

```html
<span class="badge badge--success">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    class="badge__icon"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m4.5 12.75 6 6 9-13.5"
    />
  </svg>
  Active
</span>
```

Both display inline, so badges can sit next to or inside regular text
without breaking the line flow.

## Design decisions

- Single naming convention (`badge--{variant}`) used for both text-only and
  icon badges, so the same class works either way — earlier drafts had two
  separate class sets and it was unified before merging
- Pill shape via large `border-radius`
- Icons are [Heroicons](https://heroicons.com) outline SVGs, inlined
  directly in the markup rather than pulled from an icon font or npm
  package, so there's no extra build step or external dependency
- Each icon inherits its colour from `stroke="currentColor"`, so it always
  matches its badge's text colour automatically
- I changed the text and icons colours to a bit more creative colours for fun

## Known limitations

- Colours are hardcoded — no dark mode variant
