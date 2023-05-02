import styled from "styled-components";

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 200px 50px;
  
  &.blur {
      overflow: hidden;

      header {
        background-color: transparent;
      }

      #content > * {
        filter: blur(5px) brightness(0.7);
        transition: var(--transition);
        pointer-events: none;
        user-select: none;
      }
    }
  
  @media (min-width: 700px) {
    padding: 200px 80px;
  }
  
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  
  
`
export const LandingSection = styled.section`
  margin: 0 auto;
  padding: 100px 0;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding: 90px 0;
  }
`

export const LandingImagesDiv = styled.div`
    display: flex;
    
    img {
        width: 500px;
        margin: 100px;
    }
    
    @media (max-width: 820px) {
        flex-direction: column;
    
    img {
        width: 300px;
        margin: 50px;
    }
  }
`


export const LandingDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`

export const LandingHeader = styled.div`
  text-align: left;
  width: 100%;

  @media (max-width: 768px) {
    text-align: center;
  }

  h1 {
    color: white;
    font-size: 40px;
    margin-bottom: 20px;
  }
  
  a {
    text-decoration: none;
    color: black;
    transition: var(--transition);
    
    &:hover {
        color: var(--light-blue);
    }
  }
`



export const LandingHeaderItem = styled.div`
  margin-bottom: 100px;
  
  h2 {
    color: white;
    font-size: 40px;
    margin-bottom: 20px;
  }

  span {
    color: var(--light-yellow-1);
    font-weight: 700;
  }
  
  p {
    font-size: 24px;
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
    font-size: 24px;
    display: flex;
    justify-content: space-between;
    
    img {
      margin-left: 200px;
      max-width: 500px;
    }
  }

  @media (max-width: 768px) {
    text-align: left;
    
    h2 {
      font-size: 30px;
    }

    p {
      font-size: 20px;
      line-height: 1.3;
    }
    
    ul {
      margin: 0;
    }
  }
  
  
`