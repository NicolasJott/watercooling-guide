import React from "react";
import { useDrag } from "react-dnd";

function Fitting({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "fitting",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return(
        <img
            ref={drag}
            src={url}
            width="30px"
            style={{ transform: 'translate(0, 0)', cursor: isDragging ? 'pointer' : ''}}
        />
    )
}
export default Fitting