import React from "react";
import { useDrag } from "react-dnd";

function Cpu({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "cpu",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return(
        <img
            ref={drag}
            src={url}
            width="150px"
            style={{ transform: 'translate(0, 0)', cursor: isDragging ? 'pointer' : ''}}
        />
    )
}
export default Cpu