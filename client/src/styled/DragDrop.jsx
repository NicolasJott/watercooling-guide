import styled, {css} from "styled-components";

export const CPUDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: relative;
  top: 170px;
  left: 190px;
`

export const DistroDiv = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: relative;
  top: -75px;
  left: 600px;
`

export const RadiatorDiv = styled.div`
  width: 800px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  opacity: 30%;
  position: relative;
  bottom: 600px;
  left: 20px;
`

export const StyledFittingDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;

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
export const fittingDivs = [
    {
        id: 1,
        bottom: "33.3%",
        left: "72.2%",
        image: null,
    },
    {
        id: 2,
        bottom: "65.8%",
        left: "72.2%",
        image: null,
    },
    {
        id: 3,
        bottom: "64.7%",
        left: "72.2%",
        image: null,
    },
    {
        id: 4,
        bottom: "54.8%",
        left: "72.2%",
        image: null,
    },
    {
        id: 5,
        bottom: "89%",
        left: "86.7%",
        image: null,
    },
    {
        id: 6,
        bottom: "82%",
        left: "86.7%",
        image: null,
    },


]