import {StyledFittingDiv} from "../../../styled/DragDrop";
import Fitting from "../parts/Fitting";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {FittingList} from "../../../config";
import PropTypes from "prop-types";

function FittingDiv({id, style, onFittingDrop}) {
    const [image, setImage] = useState(null)

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
        const pictureList = FittingList.filter((fitting) => id === fitting.id);
        setImage([pictureList[0].url])
        onFittingDrop()
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
    onFittingDrop: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default FittingDiv