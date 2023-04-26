import styled from "styled-components";


export const InstallSection = styled.section`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 200px;
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
  
 
`