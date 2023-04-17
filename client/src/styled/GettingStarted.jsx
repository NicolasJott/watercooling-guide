import styled from "styled-components";

export const GettingStartedSection = styled.section`
  display: flex;
  margin-top: 200px;
  width: 1800px;
  height: auto;
  max-height: fit-content;
  align-items: center;
  justify-content: center;
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
  }
  `