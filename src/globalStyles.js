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
    --font-weight: 300;
    --line-height: 25px;

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
`;