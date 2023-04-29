import { StyledRadiatorDiv } from "../../../styled/DragDrop";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";
import Radiator from "../parts/Radiator";

function RadiatorDiv({ imageUrl, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['radiator'],
        drop: (item, monitor) => {
            handleDrop();
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDrop = () => {
        setImage("../radiators/rad_drag.png")
        onPartDrop()
    };

    return (
        <StyledRadiatorDiv     currentStep={currentStep}
                             style={{
                                 opacity: image ? 1 : '',
                                 backgroundColor: image ? 'transparent' : ''
                             }}
                             ref={drop}>
            {image && <Radiator url={image} alt="fitting" />}
        </StyledRadiatorDiv>
    );
}

RadiatorDiv.propTypes = {
    currentStep: PropTypes.object,
    onPartDrop: PropTypes.func,
};

export default RadiatorDiv