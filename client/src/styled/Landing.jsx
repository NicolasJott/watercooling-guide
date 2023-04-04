import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 50px;
`
export const LandingSection = styled.section`
  margin: 0;
  max-width: 1000px;
  height: 1200px;
`

export const LandingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 70vh;
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
    color: papayawhip;
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
    margin-bottom: 10px;
    font-size: 24px;
  }
`