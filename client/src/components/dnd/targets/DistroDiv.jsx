import { StyledDistroDiv } from "../../../styled/DragDrop";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";
import Distro from "../parts/Distro";

function DistroDiv({ imageUrl, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['distro'],
        drop: (item, monitor) => {
            handleDrop();
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDrop = () => {
        setImage(currentStep.pictureList[0].url)
        onPartDrop()
    };

    return (
        <StyledDistroDiv     currentStep={currentStep}
                          style={{
                              opacity: image ? 1 : '',
                              backgroundColor: image ? 'transparent' : ''
                          }}
                          ref={drop}>
            {image && <Distro url={image} alt="fitting" />}
        </StyledDistroDiv>
    );
}

DistroDiv.propTypes = {
    currentStep: PropTypes.object,
    onPartDrop: PropTypes.func,
};

export default DistroDiv