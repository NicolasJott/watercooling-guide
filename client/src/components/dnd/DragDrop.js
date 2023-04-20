import React, {useState} from "react";
import styled from "styled-components";
import Picture from "./Picture";
import {DraggableItems, PCSide} from "../Installation";
import {useDrop} from "react-dnd";

const CPUDiv = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: white;
  opacity: 30%;
  position: relative;
  top: 170px;
  left: 190px;
`


const PictureList = [
    {
        id: 'pc',
        url: '../CPU_Block.png'
    }
]

function DragDrop() {
    const [cpuSet, setCpuSet] = useState(false)

    const [board, setBoard] = useState([
        {
            id: 'pc',
            url: '../CPU_Block.png'
        }
    ])

    const [{isOver}, drop] = useDrop(() => ({
        accept: 'image',
        drop: (item) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const addImageToBoard = (id) => {
        const pictureList = PictureList.filter((picture) => id === picture.id)
        setBoard([pictureList[0]])
        setCpuSet(true)
    }

    return(
        <>
            <PCSide ref={drop}>
                    {!cpuSet ? (
                    <CPUDiv></CPUDiv>
                    ) : (
                        <CPUDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}><Picture url={board[0].url} id={board[0].id } style={ {backgroundColor: "rgba(0,0,0,0)"}}/></CPUDiv>
                    )}
            </PCSide>
            <DraggableItems>
                {!cpuSet ?
                    PictureList.map((picture) => {
                            return <Picture url={picture.url} id={picture.id}/>
                    }) : (
                        <div></div>
                    )}
            </DraggableItems>
        </>
    )
}

export default DragDrop