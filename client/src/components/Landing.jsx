import React from "react";
import {LandingHeaderItem, LandingDiv, LandingHeader, LandingSection, Main} from "../styled/Landing";

const Landing = () => {

    return(
            <LandingSection id="landing">
                <LandingDiv>
                    <LandingHeader>
                        <LandingHeaderItem>
                            <h2>What Is Custom Water Cooling?</h2>
                            <p>Custom water cooling is a method of cooling computer components, such as CPUs and GPUs,
                                using a liquid coolant instead of traditional air cooling. This involves installing a custom loop of tubing, reservoirs, pumps,
                                and radiators to circulate the coolant through the components.</p>
                        </LandingHeaderItem>
                        <LandingHeaderItem>
                            <h2>Why Custom Water Cool?</h2>
                            <p>The benefits of custom water cooling include better temperature management, quieter operation, and the ability to overclock components
                                for better performance. However, it can be more expensive and requires more maintenance than traditional air cooling.
                                It is a popular choice for enthusiasts and gamers who want to push their systems to the limit.</p>
                        </LandingHeaderItem>
                    </LandingHeader>
                </LandingDiv>
            </LandingSection>
    )
}

export default Landing

