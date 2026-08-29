# @creador-dev/styles

Import everything:

```css
@import "@creador-dev/styles";
```

Wrap plugin UI in `.wpxdev-root` to apply the scoped reset without changing the WordPress host page. Utility classes and CSS variables use the `wpxdev` prefix (for example, `.wpxdev-container` and `--wpxdev-color-primary`).

The package is authored in SCSS and publishes compiled CSS. Sass applications can consume the source directly:

```scss
@use "@creador-dev/styles/index.scss";
```

Import only the layer you need with entry points such as `@creador-dev/styles/tokens.css` or `@creador-dev/styles/tokens.scss`.
