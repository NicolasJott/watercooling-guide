import {useDrag, useDrop} from 'react-dnd';
import {useState} from "react";


const PictureList = [
    {
        id: 'waterblock',
        url: '../CPU_Block.png'
    }
]
export function PC({ children }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'waterblock',
        drop: (item, monitor) => {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div ref={drop} style={{ border: isOver ? '2px dashed blue' : '1px solid black', width: '800px'}}>
            <img src="../empty_pc.png" style={{ width: 'inherit' }} />
            {children}
        </div>
    );
}