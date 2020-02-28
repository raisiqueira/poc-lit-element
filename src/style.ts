import {css} from 'lit-element';

export const JstButtonStyle = css`
  :host {
    --color-primary: #076e95;
  }

  .button {
    padding: 0.6875rem 1.125rem;
    border: none;
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    line-height: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition-timing-function: ease-in;
    transition-duration: .15s;
    transition-property: background-color,border-color,box-shadow,color,-webkit-box-shadow;
  }

  .button:hover {
    background-image: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    );
    cursor: pointer;
  }
  
  .button:focus {
    outline: none;
    box-shadow: 0 0 0 0.375rem rgba(143, 155, 179, 0.16);
  }

  .button:active {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2)
    );
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
