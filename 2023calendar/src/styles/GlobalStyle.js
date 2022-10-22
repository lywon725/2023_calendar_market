import { createGlobalStyle } from 'styled-components';
import backimage from '../assets/img/backimage.jpeg';

export const pointColor = '#1B2F4E';
export const baseColor = '#FD9903';

export const GlobalStyle = createGlobalStyle`
    html {
        -webkit-touch-callout:none;
        -webkit-user-select:none;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
        font-size: 0.9rem;
    }
    @font-face {
        font-family: 'JejuMyeongjo';
        font-weight: normal;
        font-style: normal;
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.eot');
        src: url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.eot?#iefix') format('embedded-opentype'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.woff2') format('woff2'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.woff') format('woff'),
            url('https://cdn.jsdelivr.net/gh/webfontworld/jeju/JejuMyeongjo.ttf') format("truetype");
        font-display: swap;
    }
    body {
        width: 100%;
    }
    @media only screen and (min-width: 375px) {
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url(${backimage})
            
        }
        .App {
            width: 375px;
            height: 100vh;
            color: #FFF;
            & > {
            float: left;
            }
        }
    }
`;
export default GlobalStyle