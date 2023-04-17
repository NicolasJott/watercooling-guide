import styled from "styled-components";

export const FAQSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (min-width: 1080px) {
    width: 1400px;
  }
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

  @media (max-width: 768px) {
    text-align: left;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 26px;
      line-height: 1.3;
      width: 100%;
    }

    ul {
      margin: 0;
    }
  }
`