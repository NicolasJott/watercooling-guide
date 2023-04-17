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

  h2 {
    color: white;
    font-size: 60px;
    margin-bottom: 20px;
  }

  span {
    color: var(--light-yellow-1);
    font-size: 40px;
    font-weight: 700;
  }
  
  p {
    font-size: 30px;
    color: white;
    line-height: 1.6;
    font-weight: 600;
    width: 70%;
  }
  
  ul {
    margin: 30px 0 20px 50px;
    color: white;
  }
  
  li {
    margin-bottom: 50px;
    display: flex;
    
    img {
      margin-left: 200px;
      max-height: 400px;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      img {
        max-width: 200px;
        margin: 50px 0 20px 0;
      }
    }

    @media (min-width: 1080px) {
      img {
        margin-left: 100px;
        max-width: 400px;
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
      width: 100%;
    }

    ul {
      margin: 0;
    }
  }
  
  
  `