import {StyledFittingDiv} from "../../../styled/DragDrop";
import Fitting from "../parts/Fitting";
import React, {useState} from "react";
import {useDrop} from "react-dnd";
import {CpuFittingList1} from "../../../config";
import PropTypes from "prop-types";

function CpuFittingDiv({id, imageUrl, style}) {
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
        const pictureList = CpuFittingList1.filter((fitting) => id === fitting.id);
        setImage([pictureList[0].url])
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

CpuFittingDiv.propTypes = {
    id: PropTypes.string.isRequired,
    style: PropTypes.object,
};

export default CpuFittingDiv