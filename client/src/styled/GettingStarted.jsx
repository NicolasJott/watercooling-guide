import styled from "styled-components";

export const GettingStartedSection = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1800px;

  @media (min-width: 1080px) {
    width: 1400px;
  }
`

export const ImagesDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 200px 0 0 200px;
  
  img {
    max-width: 300px;
    max-height: 120px;
  }
`

export const GettingStartedHeaderItem = styled.div`
  margin-bottom: 100px;
  width: 100%;


  h1 {
    font-size: 40px;
    margin-bottom: 20px;
  }

  h2 {
    color: white;
    font-size: 30px;
    margin-bottom: 20px;
  }

  p {
    font-size: 24px;
    color: white;
  }
  
  
  ul {
    margin: 30px 0 20px 50px;
    color: white;
  }
  
  li {
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;

    span {
      color: var(--light-yellow-1);
      font-size: 28px;
      font-weight: 700;
    }

    p {
      line-height: 1.6;
      font-weight: 600;
      width: 60%;
    }
    
    img {
      height: 300px;
    }

    @media (max-width: 1080px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        width: 100%;
      }
      
      img {
        height: 200px;
        margin-top: 50px;
      }
    }
  }

  @media (max-width: 768px) {
    text-align: left;

    h2 {
      font-size: 40px;
    }

    p {
      font-size: 26px;
      line-height: 1.3;
      width: 90%;
    }

    ul {
      margin: 0;
    }
  }

  @media (max-width: 450px) {

    h2 {
      font-size: 30px;
    }

    p {
      font-size: 22px;
      width: 80%;
    }

  }
  
  
  `