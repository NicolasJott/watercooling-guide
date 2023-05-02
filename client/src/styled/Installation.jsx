import styled from "styled-components";


export const InstallSection = styled.section`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 200px;
  transition: var(--transition);
  
  p {
    color: white;
  }
`
export const InstallationBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 900px;
  padding: 50px;
  border-radius: 20px;
  margin: 10px 200px;
  background-color: rgba(255, 255, 255, 0.8);

  @media (max-width: 1080px) {
    width: 900px;
    height: 600px;
  }

  @media (max-width: 900px) {
    width: 700px;
    height: 600px;
  }

`

export const InstallWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  
 
`

export const StyledSelectionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 48%;
    border: 2px solid var(--royal-orange);
    border-radius: 20px;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: var(--transition);
    
    h1 {
        margin: 20px;
        font-size: 50px
    }
    
    img {
        margin: 50px;
        width: 300px;
   }
   
   p {
    margin: 20px;
    color: black;
    font-size: 26px;
   }
   
   &:hover {
    background-color: var(--royal-orange);
    
    h1 {
        color: white
    }
    
    p {
        color: white
    }
   }
`

export const StyledInstructionsPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction column;
    align-items: center;
    justify-content: space-around;
    margin: 20px 100px;
    
    h1 {
        font-size: 40px;
        margin-bottom: 20px;
    }
    
    p {
        font-size: 22px;
        color: black;
        line-height: 1.5;
    }
    
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        text-decoration: none;
        height: 80px;
        width: 400px;
        background-color: var(--royal-orange);
        border-radius: 20px;
        color: white;
        transition: var(--transition);
        cursor: pointer;
        
        &:hover {
            background-color: #FF8000;
        }
    }
    
    
`