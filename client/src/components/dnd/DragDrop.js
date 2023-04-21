import React, {useState} from "react";
import styled from "styled-components";
import {DraggableItems, PCSide} from "../Installation";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";


import Cpu from "./parts/Cpu";
import Distro from "./parts/Distro";
import Radiator from "./parts/Radiator";
import Fitting from "./parts/Fitting";

const CPUDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: relative;
  top: 170px;
  left: 190px;
`

const DistroDiv = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: relative;
  top: -75px;
  left: 600px;
`

const RadiatorDiv = styled.div`
  width: 800px;
  height: 60px;
  border-radius: 5px;
  background-color: white;
  opacity: 30%;
  position: relative;
  bottom: 600px;
  left: 20px;
`

const FittingDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 481px;
  left: 240px;
`

const FittingDiv2 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 511px;
  left: 283px;
`

const FittingDiv3 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 518px;
  left: 624px;
`

const FittingDiv4 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 586px;
  left: 624px;
`

const FittingDiv5 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 469px;
  left: 624px;
`

const FittingDiv6 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 417px;
  left: 624px;
`

const FittingDiv7 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 772px;
  left: 749px;
`

const FittingDiv8 = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: deepskyblue;
  opacity: 30%;
  position: relative;
  bottom: 716px;
  left: 749px;
`

const CPUList = [
    {
        id: 'cpu',
        url: '../CPU_Block.png'
    },
]

const DistroList = [
    {
        id: 'distro',
        url: '../Distro_single_rad.png'
    }
]

const RadiatorList = [
    {
        id: 'radiator',
        url: '../rad_drag.png'
    }
]

const FittingList = [
    {
        id: '1',
        url: '../fitting.png'
    },
    {
        id: '2',
        url: '../fitting.png'
    },
    {
        id: '3',
        url: '../fitting.png'
    },
    {
        id: '4',
        url: '../fitting.png'
    },
    {
        id: '5',
        url: '../fitting.png'
    },
    {
        id: '6',
        url: '../fitting.png'
    },
    {
        id: '7',
        url: '../fitting.png'
    },
]



function DragDrop({ onStepChange, currentStep }) {
    const [cpuSet, setCpuSet] = useState(false)
    const [distroSet, setDistroSet] = useState(false)
    const [radiatorSet, setRadiatorSet] = useState(false)
    const [fittingSet, setFittingSet] = useState(false)


    const [CPU, setCPU] = useState([])
    const [DistroOb, setDistroOb] = useState([])
    const [Rad, setRad] = useState([])

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['cpu', 'distro', 'radiator'],
        drop: (item, monitor) => {
            const itemType = monitor.getItemType();
            switch (itemType) {
                case 'cpu':
                    addCPUToBoard(item.id);
                    break;
                case 'distro':
                    addDistroToBoard(item.id);
                    break;
                case 'radiator':
                    addRadToBoard(item.id);
                    break;
                default:
                    break;
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addCPUToBoard = (id) => {
        const pictureList = CPUList.filter((picture) => id === picture.id)
        setCPU([pictureList[0]])
        setCpuSet(true)
        ChangeStep()
    }

    const addDistroToBoard = (id) => {
        const pictureList = DistroList.filter((picture) => id === picture.id)
        setDistroOb([pictureList[0]])
        setDistroSet(true)
        ChangeStep()
    }

    const addRadToBoard = (id) => {
        const pictureList = RadiatorList.filter((picture) => id === picture.id)
        setRad([pictureList[0]])
        setRadiatorSet(true)
        ChangeStep()
    }

    function ChangeStep() {
        onStepChange()
    }

    return(
        <>
            <PCSide ref={drop}>
                {currentStep === 0  ? (
                    <CPUDiv></CPUDiv>
                    ) : (
                        <CPUDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                            <Cpu url={CPU[0].url} id={CPU[0].id } style={ {backgroundColor: "rgba(0,0,0,0)"}}/>
                        </CPUDiv>
                )}
                {currentStep === 1 && !distroSet && (
                    <DistroDiv>
                    </DistroDiv>
                )}
                {distroSet && (
                    <DistroDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                        <Distro url={DistroOb[0].url} id={DistroOb[0].id } style={ {backgroundColor: "rgba(0,0,0,0)"}}/>
                    </DistroDiv>
                )}
                {currentStep === 2  && !radiatorSet && (
                    <RadiatorDiv>
                    </RadiatorDiv>
                )}
                {radiatorSet && (
                    <RadiatorDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                        <Radiator url={Rad[0].url} id={Rad[0].id } style={ {backgroundColor: "rgba(0,0,0,0)", width: '800px'}}/>
                    </RadiatorDiv>
                )}
                {currentStep === 3 && !fittingSet && (
                    <>
                        <FittingDiv/>
                        <FittingDiv2/>
                        <FittingDiv3/>
                        <FittingDiv4/>
                        <FittingDiv5/>
                        <FittingDiv6/>
                        <FittingDiv7/>
                        <FittingDiv8/>
                    </>
                )}
            </PCSide>
            <DraggableItems>
                <ul>
                        {currentStep === 0 && !cpuSet &&
                            CPUList.map((picture) => (
                                <li>
                                    <Cpu url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 1 && !distroSet &&
                            DistroList.map((picture) => (
                                <li>
                                    <Distro url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 2 && !radiatorSet &&
                            RadiatorList.map((picture) => (
                                <li>
                                    <Radiator url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 3 && !fittingSet &&
                            FittingList.map((picture) => (
                                <li>
                                    <Fitting url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                </ul>
            </DraggableItems>
        </>
    )
}

DragDrop.propTypes = {
    onStepChange: PropTypes.func.isRequired,
};
export default DragDrop