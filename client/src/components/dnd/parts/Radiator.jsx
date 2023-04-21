import React from "react";
import { useDrag } from "react-dnd";

function Radiator({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "radiator",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return(
        <img
            ref={drag}
            src={url}
            width="100%"
            style={{ transform: 'translate(0, 0)'}}
        />
    )
}
export default Radiator