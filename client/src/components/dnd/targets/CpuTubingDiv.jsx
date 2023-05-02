import {StyledCpuTubingDiv} from "../../../styled/DragDrop";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";
import Tubing from "../parts/Tubing";

function FittingDiv({id, imageUrl, style, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['tubing'],
        drop: (item, monitor) => {
            addFittingToBoard();

        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addFittingToBoard = () => {
        console.log(id)
        if (id === 0) {
            setImage(currentStep.pictureList[0].url)
        } else if (id === 1) {
            setImage(currentStep.pictureList[1].url)
        }
        onPartDrop()
    };

    return (
        <StyledCpuTubingDiv id={id}
                          style={{
                              opacity: image ? 1 : '',
                              backgroundColor: image ? 'transparent' : '',
                              ...style,
                          }}
                          ref={drop}>
            {image && <Tubing url={image} alt="fitting" />}
        </StyledCpuTubingDiv>
    );
}

FittingDiv.propTypes = {
    id: PropTypes.number.isRequired,
    currentStep: PropTypes.object,
    style: PropTypes.object,
    onPartDrop: PropTypes.func,

};

export default FittingDiv