import { createGlobalStyle } from "styled-components";
import {TransitionStyles} from "./TransitionStyles";
import Variables from "./variables";

const GlobalStyle = createGlobalStyle`
${TransitionStyles}
${Variables}
`

export default GlobalStyle