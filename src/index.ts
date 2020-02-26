import {LitElement, html, customElement, property} from 'lit-element';
import {JstButtonStyle} from './style';

@customElement('jst-button')
export class JstButton extends LitElement {
  @property({type: Boolean})
  disabled = false;

  static get styles() {
    return [JstButtonStyle];
  }

  render() {
    return html`
      <button class="button jst-button" ?disabled="${this.disabled}">
        <slot></slot>
      </button>
    `;
  }
}
