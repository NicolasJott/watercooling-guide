import { css } from "styled-components";

const variables = css`
    :root {
      --dark-blue: #2D55CC;
      --light-blue: #487BE3;
      --light-yellow-1: #f9ddb1;
      --yellow-orange: #FAAB33;
      --royal-orange: #F99244;
      --red-orange: #FF6A4C;
      --red: #FF4041;
      
      --navbar-outer: #464646;
      --navbar-inner: #262626;
      
      --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
      --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
      --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
      --ham-after-active: bottom 0.1s ease-out,
      --transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
      --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
      --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`

export default variables