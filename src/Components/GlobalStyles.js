import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    /* roboto-regular - latin */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        src: url('../fonts/roboto-v27-latin-regular.eot'); /* IE9 Compat Modes */
        src: local(''),
            url('../fonts/roboto-v27-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
            url('../fonts/roboto-v27-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
            url('../fonts/roboto-v27-latin-regular.woff') format('woff'), /* Modern Browsers */
            url('../fonts/roboto-v27-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
            url('../fonts/roboto-v27-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    /* roboto-700 - latin */
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        src: url('../fonts/roboto-v27-latin-700.eot'); /* IE9 Compat Modes */
        src: local(''),
             url('../fonts/roboto-v27-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
             url('../fonts/roboto-v27-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
             url('../fonts/roboto-v27-latin-700.woff') format('woff'), /* Modern Browsers */
             url('../fonts/roboto-v27-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
             url('../fonts/roboto-v27-latin-700.svg#Roboto') format('svg'); /* Legacy iOS */
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        color: white;
        font-size: 14px;
        background-color: black;
        padding-top: 15vh;
    }
`;

export default globalStyles;