import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 50px;
`
export const LandingSection = styled.section`
  margin-top: 200px;
  max-width: 1000px;
  height: auto;
  max-height: fit-content;
`

export const LandingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
`

export const LandingHeader = styled.div`
  text-align: left;

  h1 {
    color: white;
  }
`



export const LandingHeaderItem = styled.div`
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
    line-height: 1.6;
    font-weight: 600;
  }
  
  ul {
    margin: 30px 0 20px 50px;
    color: white;
  }
  
  li {
    margin-bottom: 50px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    
    img {
      margin-left: 200px;
      max-width: 500px;
    }
  }
  
  
`