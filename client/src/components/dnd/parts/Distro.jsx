import React from "react";
import { useDrag } from "react-dnd";

function Distro({id, url}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "distro",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }));
    return(
        <img
            ref={drag}
            src={url}
            width="200px"
            style={{ transform: 'translate(0, 0)'}}
        />
    )
}
export default Distro