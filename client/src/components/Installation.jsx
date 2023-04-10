import React, {useEffect, useRef} from "react";
import {LandingHeader, LandingSection} from "../styled/Landing";
import {InstallationBox, InstallSection} from "../styled/Installation";
import sr from "../utils/ScrollReveal";
import {srConfig} from "../config";

const Installation = () => {
    const revealContainer = useRef(null)

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())
    }, [])

    return(
        <InstallSection id="install" ref={revealContainer}>
            <LandingHeader>
                <h1>Installation</h1>
            </LandingHeader>
            <InstallationBox>
            </InstallationBox>
        </InstallSection>
    )

}

export default Installation