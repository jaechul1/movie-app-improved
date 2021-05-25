import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a {
        text-decoration: none;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }
    body {
        color: white;
        font-size: 1.5vw;
        background-color: black;
        padding-top: calc(4vw + 6vh);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        overflow-x: hidden;
        font-weight: 100;
    }
    .thumbnail {
        padding-bottom: calc(100% / (2/3));
    }
    @media (max-width: 1200px) {
        body, .Company {
            font-size: 18px;
        }
    }
    @media (max-width: 1000px) {
        .RatingText {
            font-size: 10px;
        }
        .SmallText {
            font-size: 6px;
        }
        .CountText {
            font-size: 8px;
        }
        .Prefix {
            font-size: 25px;
        }
        .Number {
            font-size: 20px;
        }
    }
    @media (max-width: 800px) {
        .Header, .Arrow {
            font-size: 24px;
        }
        .SectionTitle {
            font-size: 20px;
        }
        .DetailTitle {
            font-size: 16px;
        }
        .Icon {
            font-size: 12px;
        }
        .Overview {
            font-size: 11px;
        }
        .ItemContainer {
            font-size: 9px;
        }
        .YoutubeType {
            font-size: 20px;
        }
    }
    @media (max-width: 600px) {
        .Header {
            font-size: 18px;
        }
    }
    @media (max-width: 500px) {
        .Header {
            font-size: 16px;
        }
    }
    @media (max-width: 400px) {
        .Header {
            font-size: 15px;
        }
    }
`;

export default globalStyles;
