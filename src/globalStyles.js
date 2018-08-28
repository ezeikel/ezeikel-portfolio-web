import { injectGlobal } from 'styled-components';
import { normalize } from './normalize';

export default injectGlobal`
  :root {
    /*colors*/
    --color-white: #FFFFFF;
    --color-black: #333333;
    --color-yellow: #F8DC3D;
    --color-primary: #1ABC9C;
    --color-available: #2ECC71;
    --color-unavailable: #E74C3C;

    /*fonts*/
    --primary-font-family: "museo-sans", sans-serif;

    /*font sizes*/
    --font-size-base: 18px;
    --font-size-heading-base: 16px;

    /*font colors*/
    --primary-text-color: var(--color-black);

    /*spacing*/
    --spacing-tiny: 4px;
    --spacing-small: calc(var(--spacing-tiny) * 2); //8px
    --spacing-medium: calc(var(--spacing-small) * 2); //16px
    --spacing-large: calc(var(--spacing-medium) * 2); //32px
    --spacing-huge: calc(var(--spacing-large) * 2); //64px
    --spacing-gargantuan: calc(var(--spacing-huge) * 2); //128px

    --h1-font-size: calc(var(--font-size-heading-base) * 2.5);
    --h2-font-size: calc(var(--font-size-heading-base) * 2);
    --h3-font-size: calc(var(--font-size-heading-base) * 1.75);
    --h4-font-size: calc(var(--font-size-heading-base) * 1.5);
    --h5-font-size: calc(var(--font-size-heading-base) * 1.25);
    --h6-font-size: var(--font-size-heading-base);

    --headings-font-weight: 500;
    --headings-line-height: 1.2;
    
  }
  ${normalize}
  * {
    box-sizing: border-box;
  }

  body {
    font-family: var(--primary-font-family);
    font-size: var(--font-size-base);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
  }

  a,
  a:visited,
  a:link,
  a:active {
    text-decoration: none;
    color: var(--primary-text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-family: var(--primary-font-family);
    font-weight: var(--headings-font-weight);
    line-height: var(--headings-line-height);
  }

  h1 { font-size: var(--h1-font-size); }
  h2 { font-size: var(--h2-font-size); }
  h3 { font-size: var(--h3-font-size); }
  h4 { font-size: var(--h4-font-size); }
  h5 { font-size: var(--h5-font-size); }
  h6 { font-size: var(--h6-font-size); }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;