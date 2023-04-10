import styled from "styled-components";

export const FAQSection = styled.section`
  margin-top: 200px;
  max-width: 1000px;
  height: auto;
  max-height: fit-content;
`

export const FAQItem = styled.div`
  margin-bottom: 100px;

  h2 {
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
  }

  span {
    color: var(--light-yellow-1);
    font-weight: 700;
  }

  p {
    font-size: 30px;
    color: white;
  }

  ul {
    margin: 30px 0 20px 50px;
    color: white;
  }

  li {
    list-style-type: none;
    margin-bottom: 30px;
    font-size: 24px;
  }
`