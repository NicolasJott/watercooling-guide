import React from "react";
import { useDrag } from "react-dnd";

function Tubing({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "tubing",
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
            height="100%"
            style={{ transform: 'translate(0, 0)', cursor: isDragging ? 'pointer' : ''}}
        />
    )
}
export default Tubing

