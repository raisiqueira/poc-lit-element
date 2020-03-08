# Lit Button

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/owner/my-element) [![Bundlephobia](https://badgen.net/bundlephobia/minzip/@raisiqueira/lit-button)](https://badgen.net/bundlephobia/minzip/@raisiqueira/lit-button)

Simple custom Web Component made with Lit Element.

> Studies only to see how Polymer Lit Element work!

## Install

```bash
yarn add @raisiqueira/lit-button
```

## Usage

```html
<script type="module">
  import 'https://unpkg.com/@raisiqueira/lit-button@1.0.3/dist/index.js';
</script>
<jst-button>Hey button</jst-button>
```

See a real example on [Storybook](https://rs-lit-button.netlify.com)

### Props

| Prop     | type    | default |
| -------- | ------- | ------- |
| disabled | boolean | false   |
| primary  | boolean | false   |

## Running the project (all commands available)

### dev

Run the `concurrently` command to compile with TypeScript and run the `es-dev-server`

### format

Runs prettier

### lint

Runs `eslint`

## Build the project (commands available)

### build

Build the project and generate a `dist` folder.

### build:watch

Build the project with TypeScript and watch all `.ts` files.

# License

MIT @ Raí Siqueira
