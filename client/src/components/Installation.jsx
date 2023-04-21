import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {LandingHeader, LandingSection} from "../styled/Landing";
import {InstallationBox, InstallSection, InstallWrapper} from "../styled/Installation";
import sr from "../utils/ScrollReveal";
import {srConfig} from "../config";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./dnd/DragDrop";
import {InstallationSteps} from "../config";

export const PCSide = styled.div`
  background-image: url('empty_pc.png');
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

    function handleStepChange() {
        setCurrentStep(prevStep => prevStep + 1)
        console.log(currentStep)
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
                    <h1>{InstallationSteps[currentStep].body}</h1>
                    <InstallWrapper>
                    <DndProvider backend={HTML5Backend}>
                            <DragDrop onStepChange={handleStepChange} currentStep={currentStep}/>
                    </DndProvider>
            </InstallWrapper>
                </InstallationBox>
        </InstallSection>
    )
}

export default Installation