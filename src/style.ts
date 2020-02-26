import {css} from 'lit-element';

export const JstButtonStyle = css`
  :host {
    --color-primary: #076e95;
  }

  .button {
    padding: 0 20px;
    border: none;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 36px;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
  }

  .button:hover {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    );
    cursor: pointer;
  }

  .button:active {
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  }
  
  //.button:hover:active {
  //  visibility: hidden;
  //}

  .button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  .jst-button {
    background-color: var(--color-primary, #076e95);
    color: white;
  }
`;
