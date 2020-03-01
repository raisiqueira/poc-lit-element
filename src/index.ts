import {LitElement, html, customElement, property} from 'lit-element';
import {JstButtonStyle} from './style';

@customElement('jst-button')
export class JstButton extends LitElement {
  @property({type: Boolean})
  disabled = false;

  @property({type: Boolean})
  primary = false;

  static get styles() {
    return [JstButtonStyle];
  }

  render() {
    return html`
      <button class="button" ?primary="${this.primary}" ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}
