import React, {useEffect, useState} from "react";
import {LandingHeaderItem, LandingDiv, LandingHeader, LandingSection} from "../styled/Landing";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {navDelay} from "../utils";
import {  landingItems } from "../config";

const Landing = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true);
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])

    const timeout = navDelay
    const fadeUp = 'fadeup'

    return(
            <LandingSection id="landing" >
                <LandingDiv>
                            <LandingHeader>
                                <TransitionGroup component={null}>
                                    {isMounted &&
                                     landingItems &&
                                            landingItems.map(({ header, body }, i) =>(
                                                    <CSSTransition key={i} classNames={fadeUp} timeout={timeout}>
                                                        <LandingHeaderItem key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                                            <h2>{header}</h2>
                                                            <p>{body}</p>
                                                        </LandingHeaderItem>
                                                    </CSSTransition>
                                                ))}
                                </TransitionGroup>
                            </LandingHeader>
                </LandingDiv>
            </LandingSection>
    )
}

export default Landing

