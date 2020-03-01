import { withA11y } from '@storybook/addon-a11y';
import { html } from 'lit-element';
import '../dist/index'

export default {
  title: 'Button',
  decorators: [withA11y],
  component: 'jst-button',
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
  },
};

export const BasicButton = () => html`
  <jst-button>A simple button</jst-button>
`;

export const PrimaryButton = () => html`
  <jst-button primary>Primary button</jst-button>
`;

export const DisabledButton = () => html`
  <jst-button primary disabled>Disabled button</jst-button>
`;
