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

export const fittingDivs = [
    {
        id: 1,
        bottom: "481px",
        left: "240px",
        image: null,
    },
    {
        id: 2,
        bottom: "511px",
        left: "283px",
        image: null,
    },
    {
        id: 3,
        bottom: "518px",
        left: "624px",
        image: null,
    },
    {
        id: 4,
        bottom: "586px",
        left: "624px",
        image: null,
    },
    {
        id: 5,
        bottom: "469px",
        left: "624px",
        image: null,
    },
    {
        id: 6,
        bottom: "417px",
        left: "624px",
        image: null,
    },
    {
        id: 7,
        bottom: "772px",
        left: "749px",
        image: null,
    },
    {
        id: 8,
        bottom: "716px",
        left: "749px",
        image: null,
    },


]