import {StyledCpuDiv} from "../../../styled/DragDrop";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";
import Cpu from "../parts/Cpu";

function CpuDiv({ imageUrl, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['cpu'],
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
        <StyledCpuDiv     currentStep={currentStep}
                          style={{
                              opacity: image ? 1 : '',
                              backgroundColor: image ? 'transparent' : ''
                          }}
                          ref={drop}>
            {image && <Cpu url={image} alt="fitting" />}
        </StyledCpuDiv>
    );
}

CpuDiv.propTypes = {
    currentStep: PropTypes.object,
    onPartDrop: PropTypes.func,
};

export default CpuDiv