import styled, {css} from "styled-components";

export const PCSide = styled.div`
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  object-fit: fill;
`

export const DraggableItems = styled.div`
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 18%;
  overflow-x: hidden;
  ul {
    list-style-type: none;
  }
  
  li {
    margin-bottom: 10px;
  }
`

export const StyledCpuDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: deepskyblue;
  opacity: 30%;
  position: absolute;
  top: 22%;
  left: 17%;
`

export const StyledDistroDiv = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  background-color: deepskyblue;
  opacity: 30%;
  position: absolute;
  top: 10%;
  left: 52.5%;
`

export const StyledRadiatorDiv = styled.div`
  width: 775px;
  height: 60px;
  border-radius: 5px;
  background-color: deepskyblue;
  opacity: 30%;
  position: absolute;
  top: 5%;
  left: 2.5%;
`


export const StyledFanDiv = styled.div`
  width: 220px;
  height: 30px;
  border-radius: 5px;
  background-color: deepskyblue;
  opacity: 30%;
  position: absolute;
`

export const StyledFittingDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: absolute;

  ${props => props.image && css`
    background-image: url(${props.image});
    background-size: cover;
    opacity: 1;
    background-color: transparent;
  `}
  
`

export const StyledCpuTubingDiv = styled.div`
    border-radius: 20px;
    background-color: deepskyblue;
    opacity: 30%;
    position: absolute;
`
