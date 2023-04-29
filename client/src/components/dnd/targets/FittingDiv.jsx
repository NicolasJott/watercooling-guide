import {StyledFittingDiv} from "../../../styled/DragDrop";
import Fitting from "../parts/Fitting";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {DistroFittingList} from "../../../config";
import PropTypes from "prop-types";

function FittingDiv({id, imageUrl, style, currentStep, onPartDrop}) {
    const [image, setImage] = useState(imageUrl)

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['fitting'],
        drop: (item, monitor) => {
            addFittingToBoard(item.id);

        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addFittingToBoard = (id) => {
        setImage(currentStep.pictureList[0].url)
        onPartDrop()
    };

    return (
        <StyledFittingDiv id={id}
                          style={{
                              opacity: image ? 1 : '',
                              backgroundColor: image ? 'transparent' : '',
                              ...style,
                          }}
                          ref={drop}>
            {image && <Fitting url={image} alt="fitting" />}
        </StyledFittingDiv>
    );
}

FittingDiv.propTypes = {
    id: PropTypes.string.isRequired,
    currentStep: PropTypes.object,
    style: PropTypes.object,
    onPartDrop: PropTypes.func,

};

export default FittingDiv