import { normalize } from "styled-normalize";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ${normalize};
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html { 
            font-size: 62.5%;
            width: 100%;
            scroll-behavior: smooth;
    }
    body {
      font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;;
        background: #0a192f;
        color: white;
        max-width: 1400px;
        margin:  auto;
    }
      a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
    
    `;

export default GlobalStyles;
