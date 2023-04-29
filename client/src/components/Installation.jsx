import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {LandingHeader, LandingSection} from "../styled/Landing";
import {InstallationBox, InstallSection, InstallWrapper} from "../styled/Installation";
import sr from "../utils/ScrollReveal";
import {DistroFittingList, srConfig} from "../config";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./dnd/DragDrop";
import {InstallationSteps} from "../config";
import CpuDiv from "./dnd/targets/CpuDiv";
import DistroDiv from "./dnd/targets/DistroDiv";
import RadiatorDiv from "./dnd/targets/RadiatorDiv";
import FanDiv from "./dnd/targets/FanDiv";
import FittingDiv from "./dnd/targets/FittingDiv";
import {CpuFittingTargets} from "../styled/DragDrop";
import CpuFittingDiv from "./dnd/targets/CpuFittingDiv";
import Cpu from "./dnd/parts/Cpu";
import Distro from "./dnd/parts/Distro";
import Radiator from "./dnd/parts/Radiator";
import Fan from "./dnd/parts/Fan";
import Fitting from "./dnd/parts/Fitting";

export const PCSide = styled.div`
  background-image: url('../pcs/empty_pc.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  object-fit: fill;
  width: 80%;
  margin-right: 20px;
`

export const DraggableItems = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 20%;
  
  ul {
    list-style-type: none;
  }
  
  li {
    margin-bottom: 20px;
  }
`


const Installation = () => {
    const revealContainer = useRef(null)
    const [currentStep, setCurrentStep] = useState(0)

    const [cpuSet, setCpuSet] = useState(false)
    const [distroSet, setDistroSet] = useState(false)
    const [radiatorSet, setRadiatorSet] = useState(false)
    const [fanSet, setFanSet] = useState(false)
    const [flatSet, setFlatSet] = useState(false)
    const [distroAngleSet, setDistroAngleSet] = useState(false)
    const [cpuTopAngleSet, setCpuTopAngleSet] = useState(false)
    const [cpuRightAngleSet, setCpuRightAngleSet] = useState(false)


    const [installStep, setInstallStep] = useState(InstallationSteps[0])
    const [fanStep, setFanStep] = useState(InstallationSteps[3])
    let count = 0




    function handleStepChange() {
        setCurrentStep(prevStep => prevStep + 1)
        setInstallStep(InstallationSteps[currentStep + 1])
        count = 0
        console.log(installStep)
    }

    function handlePartDrop(id) {
        switch (id) {
            case 'cpu':
                handleStepChange()
                setCpuSet(true)
                break
            case 'distro':
                handleStepChange()
                setDistroSet(true)
                console.log(currentStep)

                break
            case 'radiator':
                setRadiatorSet(true)
                console.log(currentStep)
                handleStepChange()
                break
            case 'fan':
                count += 1
                console.log(count)
                if (count === 3) {
                    setFanSet(true)
                    handleStepChange()
                }
                break
            case 'flat':
                count += 1
                console.log(count)
                if (count === 4) {
                    setFlatSet(true)
                    handleStepChange()
                }
                break
            case 'topAngleDistro':
                count += 1
                if (count === 2) {
                    setDistroAngleSet(true)
                    handleStepChange()
                }
                break
            case 'topAngleCpu':
                count += 1
                if (count === 2) {
                    setCpuTopAngleSet(true)
                    handleStepChange()
                }
                break
            case 'rightAngleCpu':
                    setCpuRightAngleSet(true)
                    handleStepChange()
                break
            default:
                break
        }

    }


    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())
    }, [])

    return(
        <InstallSection id="install" ref={revealContainer}>
            <LandingHeader>
                <h1>Installation</h1>
            </LandingHeader>
                <InstallationBox>
                    <h1>{installStep.body}</h1>
                    <InstallWrapper>
                    <DndProvider backend={HTML5Backend}>
                        <PCSide>
                            <CpuDiv
                                currentStep={installStep}
                                imageUrl={null}
                                onPartDrop={(e) => handlePartDrop('cpu')}
                            />
                            {cpuSet && (
                                <DistroDiv
                                    currentStep={installStep}
                                    imageUrl={null}
                                    onPartDrop={(e) => handlePartDrop('distro')}
                                />
                            )}
                            {distroSet && (
                                <RadiatorDiv
                                    currentStep={installStep}
                                    imageUrl={null}
                                    onPartDrop={(e) => handlePartDrop('radiator')}
                                />
                            )}
                            {radiatorSet &&
                                fanStep.FanTargets.map((target) => (
                                    <FanDiv
                                        key={target.id}
                                        currentStep={installStep}
                                        imageUrl={null}
                                        style={{ bottom: target.bottom, left: target.left}}
                                        onPartDrop={(e) => handlePartDrop('fan')}
                                    />
                                ))}
                            {fanSet &&
                               InstallationSteps[4].DistroFittingTargets.map((target) => (
                                    <FittingDiv
                                        key={target.id}
                                        currentStep={installStep}
                                        imageUrl={null}
                                        style={{ bottom: target.bottom, left: target.left}}
                                        onPartDrop={(e) => handlePartDrop('flat')}
                                    />
                                ))}
                            {flatSet &&
                                InstallationSteps[5].DistroFittingTargets.map((target) => (
                                    <FittingDiv
                                        key={target.id}
                                        currentStep={installStep}
                                        imageUrl={null}
                                        style={{ bottom: target.bottom, left: target.left, transform: target.transform}}
                                        onPartDrop={(e) => handlePartDrop('topAngleDistro')}
                                    />
                                ))}
                            {distroAngleSet &&
                                InstallationSteps[6].CpuFittingTargets.map((target) => (
                                    <FittingDiv
                                        key={target.id}
                                        currentStep={installStep}
                                        imageUrl={null}
                                        style={{ bottom: target.bottom, left: target.left, transform: target.transform}}
                                        onPartDrop={(e) => handlePartDrop('topAngleCpu')}
                                    />
                                ))}
                            {cpuTopAngleSet &&
                                InstallationSteps[7].CpuFittingTargets.map((target) => (
                                    <FittingDiv
                                        key={target.id}
                                        currentStep={installStep}
                                        imageUrl={null}
                                        style={{ bottom: target.bottom, left: target.left}}
                                        onPartDrop={(e) => handlePartDrop('rightAngleCpu')}
                                    />
                                ))}
                        </PCSide>
                        <DraggableItems>
                            <ul>
                                {installStep.pictureList.map(({ id, url }, i) => (
                                    <li>
                                        {id === 'cpu' ? (
                                            <Cpu url={url} id={id} key={i}/>
                                        ) : id === 'distro' ? (
                                            <Distro url={url} id={id} key={i}/>
                                        ) : id === 'radiator' ? (
                                            <Radiator url={url} id={id} key={i}/>
                                        ) : id === 'fan' ? (
                                            <Fan url={url} id={id} />
                                        ) : id === 'flat' ? (
                                            <Fitting url={url} id={id} />
                                        ) : id === 'angleDistro' ? (
                                            <Fitting url={url} id={id} />
                                        ) : id === 'angleCPU' ? (
                                            <Fitting url={url} id={id} />
                                        ) : id === 'rightCpu' ? (
                                            <Fitting url={url} id={id} />
                                        ) : null}
                                    </li>
                                ))}
                            </ul>
                        </DraggableItems>
                    </DndProvider>
            </InstallWrapper>
                </InstallationBox>
        </InstallSection>
    )
}

export default Installation