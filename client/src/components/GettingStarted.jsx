import React, {useEffect, useRef, useState} from "react";
import { LandingDiv, LandingHeader} from "../styled/Landing";
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import sr from "../utils/ScrollReveal";
import {srConfig, gettingStartedItems} from "../config";
import {navDelay} from "../utils";
import {GettingStartedHeaderItem, GettingStartedSection} from "../styled/GettingStarted";

const GettingStarted = () => {
    const revealContainer = useRef(null)
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())

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
            <GettingStartedSection id="get-started" >
                <LandingDiv>
                    <LandingHeader>
                        <TransitionGroup component={null}>
                            {isMounted && (
                                <CSSTransition classNames={fadeUp} timeout={timeout}>
                                    <h1>Choosing Components</h1>
                                </CSSTransition>
                            )}
                        </TransitionGroup>
                        <GettingStartedHeaderItem>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeUp} timeout={timeout}>
                                        <p>When going for the custom loop, you choose every component yourself. You get unlimited customization options and the best performance.
                                            The first step is to decide which components you want to liquid cool, usually we start with the CPU and continue from there. CPU and GPU loops are one step further, but you can always continue to add more components to the loop.</p>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                            <ul>
                                <TransitionGroup component={null}>
                                {isMounted &&
                                    gettingStartedItems &&
                                    gettingStartedItems.map(({ title, body, url }, i) => (
                                            <CSSTransition key={i} classNames={fadeUp} timeout={timeout}>
                                                <li key={i} style={{ transitionDelay: `${i * 100}ms` }}>
                                                    <p><span>{title}</span> {body}</p>
                                                    <img src={url} alt=""/>
                                                </li>
                                            </CSSTransition>
                                    ))
                                }
                                </TransitionGroup>
                            </ul>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeUp} timeout={timeout}>
                                        <p style={{ transitionDelay: `${gettingStartedItems ? gettingStartedItems.length * 100 : 1000}ms`, fontSize: '14px'}}>
                                            “Custom Loop - EKWB.” Ekwb.Com, 18 Aug. 2021, <a href="www.ekwb.com/solutions/custom-loop/#needed-components">www.ekwb.com/solutions/custom-loop/#needed-components.</a>
                                        </p>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                            <TransitionGroup component={null}>
                                {isMounted && (
                                    <CSSTransition classNames={fadeUp} timeout={timeout}>
                                        <p style={{ transitionDelay: `${gettingStartedItems ? gettingStartedItems.length * 100 : 1000}ms`}}>
                                            By considering these factors when choosing your components, you can ensure that your water-cooling setup is compatible, efficient, and effective.
                                            Be sure to do your research and choose components that are reliable and high-quality to ensure the best performance and longevity.
                                        </p>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </GettingStartedHeaderItem>
                    </LandingHeader>
                </LandingDiv>
            </GettingStartedSection>
    )
}

export default GettingStarted

