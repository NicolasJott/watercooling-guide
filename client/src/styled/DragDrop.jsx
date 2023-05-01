import styled, {css} from "styled-components";

export const StyledCpuDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: absolute;
  top: 34%;
  left: 25%;
`

export const StyledDistroDiv = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: absolute;
  top: 26%;
  left: 52.5%;
`

export const StyledRadiatorDiv = styled.div`
  width: 775px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  opacity: 30%;
  position: absolute;
  bottom: 720px;
  left: 198px;
`

export const StyledFanDiv = styled.div`
  width: 230px;
  height: 30px;
  border-radius: 5px;
  background-color: white;
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

export const CpuFittingTargets = [
    {
        id: 1,
        bottom: "82.6%",
        left: "27.8%",
        image: null
    },
    {
        id: 2,
        bottom: "86.3%",
        left: "32.8%",
        image: null
    }
]
