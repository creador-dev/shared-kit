# @wpxdev/styles

Import everything:

```css
@import "@wpxdev/styles";
```

Wrap plugin UI in `.wpxdev-root` to apply the scoped reset without changing the WordPress host page. Utility classes and CSS variables use the `wpxdev` prefix (for example, `.wpxdev-container` and `--wpxdev-color-primary`).

The package is authored in SCSS and publishes compiled CSS. Sass applications can consume the source directly:

```scss
@use "@wpxdev/styles/index.scss";
```

Import only the layer you need with entry points such as `@wpxdev/styles/tokens.css` or `@wpxdev/styles/tokens.scss`.
