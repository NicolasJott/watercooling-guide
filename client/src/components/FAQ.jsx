import React, {useEffect, useRef} from "react";
import {LandingDiv, LandingHeader} from "../styled/Landing";
import sr from "../utils/ScrollReveal";
import {srConfig, faqItems} from "../config";
import {FAQItem, FAQSection} from "../styled/FAQ";

const FAQ = () => {
    const revealContainer = useRef(null)

    useEffect(() => {
        sr.reveal(revealContainer.current, srConfig())
    }, [])

    return(
        <FAQSection id='faq' ref={revealContainer}>
            <LandingDiv>
                <LandingHeader>
                    <h1>Frequently Asked Questions</h1>
                    <FAQItem>
                        <ul>
                            {faqItems &&
                                faqItems.map(({ question, answer },i) =>(
                                    <li key={i}>
                                        <h3>Q: {question}</h3>
                                        <p>A: {answer}</p>
                                    </li>
                                ))}
                        </ul>
                    </FAQItem>
                </LandingHeader>
            </LandingDiv>
        </FAQSection>
    )
}

export default FAQ