import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {LandingHeader, LandingSection} from "../styled/Landing";
import {
    InstallationBox,
    InstallSection,
    InstallWrapper,
    StyledInstructionsPage,
    StyledSelectionItem
} from "../styled/Installation";
import sr from "../utils/ScrollReveal";
import {DualInstallationSteps, srConfig} from "../config";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {SingleInstallationSteps} from "../config";
import SingleDragDrop from "./dnd/SingleDragDrop";
import DualDragDrop from "./dnd/DualDragDrop";




const Installation = () => {
    const revealContainer = useRef(null)
    const [currentStep, setCurrentStep] = useState(0)
    const [installStep, setInstallStep] = useState(null)
    const [config, setConfig] = useState(false)
    const [instructions, setInstructions] = useState(true)
    const [path, setPath] = useState(null)
    const [selectionConfig, setSelectionConfig] = useState(null)
    let count = 0

    useEffect(() => {
        if (selectionConfig && currentStep === 0) {
            setInstallStep(selectionConfig[currentStep]);
        }
    }, [selectionConfig, currentStep]);


    function handleConfig(type) {

        switch (type) {
            case 'single':
                setSelectionConfig(SingleInstallationSteps)
                setConfig(!config)
                break
            case 'dual':
                setSelectionConfig(DualInstallationSteps)
                setConfig(!config)
                break
            default:
                break
        }
        setPath(type)
    }



    function handleStepChange() {
        setCurrentStep(prevStep => prevStep + 1)
        setInstallStep(selectionConfig[currentStep + 1]);
        count = 0
    }



    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())
    }, [])

    return(
        <InstallSection id="install" ref={revealContainer}>
            <LandingHeader>
                <h1>Installation
                    {!instructions && path &&
                    path === 'single' ? (
                        <span>: Single Loop System</span>
                    ) : path === 'dual' && (
                        <span>: Dual Loop System</span>
                    )}
                </h1>
            </LandingHeader>
                <InstallationBox>
                    {!instructions && installStep && (
                        <h1>{installStep.body}</h1>
                    )}
                    <InstallWrapper>
                        {!config && !instructions && (
                            <>
                                <StyledSelectionItem onClick={(e) => handleConfig('single')}>
                                    <img src="../pcs/single_full.png" alt="single loop pc"/>
                                    <h1>Single Loop System</h1>
                                    <p>This single loop system consists of one loop that takes care of cooling the CPU.</p>
                                </StyledSelectionItem>
                                <StyledSelectionItem onClick={(e) => handleConfig('dual')}>
                                    <img src="../pcs/dual_full.png" alt="single loop pc"/>
                                    <h1>Dual Loop System</h1>
                                    <p>This dual loop system consists of a complete loop with the purpose of water cooling your CPU and GPU for the coolest experience possible.</p>
                                </StyledSelectionItem>
                            </>
                        )}
                        {instructions && (
                            <StyledInstructionsPage>
                                <h1>Instructions</h1>
                                <p>
                                    Water-cooling is a popular technique used to cool down PC components that generate a lot of heat, such as the CPU and GPU. To make this process easy and straightforward, an interactive guide has been created. The guide will walk you through all the necessary steps to water-cool your PC effectively.
                                </p>
                                <p>
                                    As you follow the guide, you'll see a right sidebar listing all the required parts. You can use your mouse to drag these parts from the sidebar and drop them onto the corresponding outlined areas on your PC. This interactive method ensures that you won't miss any crucial steps, and it makes the process much more enjoyable and engaging.

                                </p>
                                <p>
                                    With this guide, you'll be able to water-cool your PC like a pro. So, take your time, follow the steps carefully, and enjoy the cooling benefits of water-cooling your PC!.
                                </p>
                                <a onClick={() => setInstructions(!instructions)}>Continue</a>
                            </StyledInstructionsPage>
                        )}

                    <DndProvider backend={HTML5Backend}>
                        {installStep !== null && path === 'single' ? (
                            <SingleDragDrop count={count} installStep={installStep} handleStepChange={handleStepChange}/>
                        ) : installStep!== null && path === 'dual' && (
                            <DualDragDrop count={count} installStep={installStep} handleStepChange={handleStepChange}/>
                        )}
                    </DndProvider>
            </InstallWrapper>
                </InstallationBox>
            {!instructions && installStep &&
            installStep.description ?
                installStep.description && (
                <p>{installStep.description}</p>
            ) : !instructions && (
                <p>Select an option to begin</p>
            )}
        </InstallSection>
    )
}

export default Installation