import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {LandingHeader, LandingSection} from "../styled/Landing";
import {InstallationBox, InstallSection, InstallWrapper} from "../styled/Installation";
import sr from "../utils/ScrollReveal";
import {srConfig} from "../config";
import {PC, Radiator, Waterblock} from "./dnd/parts";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragDrop from "./dnd/DragDrop";

export const PCSide = styled.div`
  background-image: url('empty_pc.png');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
  object-fit: fill;
  width: 80%;
`

export const DraggableItems = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: auto
`


const Installation = () => {
    const revealContainer = useRef(null)
    const [currentStep, setCurrentStep] = useState(0)



    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())
    }, [])

    return(
        <InstallSection id="install" ref={revealContainer}>
            <LandingHeader>
                <h1>Installation</h1>
            </LandingHeader>
                <InstallationBox>
                    <h1>Step 1: Install the CPU waterblock</h1>
                    <InstallWrapper>
                    <DndProvider backend={HTML5Backend}>
                            <DragDrop/>
                    </DndProvider>
            </InstallWrapper>
                </InstallationBox>
        </InstallSection>
    )
}

export default Installation