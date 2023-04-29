import {StyledFanDiv} from "../../../styled/DragDrop";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";
import Radiator from "../parts/Radiator";

function FanDiv({ imageUrl, style, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['fan'],
        drop: (item, monitor) => {
            handleDrop();
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const handleDrop = () => {
        setImage("../fans/Fan_Side.png")
        onPartDrop()
    };

    return (
        <StyledFanDiv
            currentStep={currentStep}
            style={{
                opacity: image ? 1 : '',
                backgroundColor: image ? 'transparent' : '',
                ...style
        }}
            ref={drop}>
            {image && <Radiator url={image} alt="fitting" />}
        </StyledFanDiv>
    );
}

FanDiv.propTypes = {
    style: PropTypes.object,
    currentStep: PropTypes.object,
    onPartDrop: PropTypes.func,
};

export default FanDiv