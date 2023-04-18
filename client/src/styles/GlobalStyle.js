import { createGlobalStyle } from "styled-components";
import {TransitionStyles} from "./TransitionStyles";
import Variables from "./variables";

const GlobalStyle = createGlobalStyle`
    ${TransitionStyles}
    ${Variables}

    html {
      height: 100%;
    
    }
    
    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      width: 100%;
      min-height: 100%;
      line-height: 1.3;
      overflow-x: hidden;
      font-size: 20px;
      
      
    }
`

export default GlobalStyle