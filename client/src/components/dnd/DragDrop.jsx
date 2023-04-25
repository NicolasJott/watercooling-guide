import React, {useState} from "react";
import {DraggableItems, PCSide} from "../Installation";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";

import {
    CPUDiv,
    DistroDiv,
    FittingDiv,
    RadiatorDiv,
    fittingDivs
} from "../../styled/DragDrop";
import {CPUList, DistroList, FittingList, RadiatorList} from "../../config";

import Cpu from "./parts/Cpu";
import Distro from "./parts/Distro";
import Radiator from "./parts/Radiator";
import Fitting from "./parts/Fitting";



function DragDrop({ onStepChange, currentStep }) {
    const [cpuSet, setCpuSet] = useState(false)
    const [distroSet, setDistroSet] = useState(false)
    const [radiatorSet, setRadiatorSet] = useState(false)
    const [fittingSet, setFittingSet] = useState(false)
    const [fittingImage, setFittingImage] = useState(null);
    const [fittingList, setFittingList] = useState(fittingDivs);



    const [CPU, setCPU] = useState([])
    const [DistroOb, setDistroOb] = useState([])
    const [Rad, setRad] = useState([])

    const [{isOver}, drop] = useDrop(() => ({
        accept: ['cpu', 'distro', 'radiator', 'fitting'],
        drop: (item, monitor) => {
            const itemType = monitor.getItemType();
            switch (itemType) {
                case 'cpu':
                    addCPUToBoard(item.id);
                    break;
                case 'distro':
                    addDistroToBoard(item.id);
                    break;
                case 'radiator':
                    addRadToBoard(item.id);
                    break;
                case 'fitting':
                    addFittingToBoard(item.id);
                    break;
                default:
                    break;
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));


    const addCPUToBoard = (id) => {
        const pictureList = CPUList.filter((picture) => id === picture.id)
        setCPU([pictureList[0]])
        setCpuSet(true)
        ChangeStep()
    }

    const addDistroToBoard = (id) => {
        const pictureList = DistroList.filter((picture) => id === picture.id)
        setDistroOb([pictureList[0]])
        setDistroSet(true)
        ChangeStep()
    }

    const addRadToBoard = (id) => {
        const pictureList = RadiatorList.filter((picture) => id === picture.id)
        setRad([pictureList[0]])
        setRadiatorSet(true)
        ChangeStep()
    }
    const addFittingToBoard = (id) => {
        const pictureList = FittingList.filter((picture) => id === picture.id);
        const newFittingList = fittingList.map(fd =>
            fd.id === fd.id ? { ...fd, image: pictureList[0].url } : fd
        );
        setFittingList(newFittingList)
        setFittingSet(true)
        ChangeStep()
    };

    function ChangeStep() {
        onStepChange()
    }

    return(
        <>
            <PCSide ref={drop}>
                {currentStep === 0  ? (
                    <CPUDiv></CPUDiv>
                    ) : (
                        <CPUDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                            <Cpu url={CPU[0].url} id={CPU[0].id } style={ {backgroundColor: "rgba(0,0,0,0)", cursor: 'none'}}/>
                        </CPUDiv>
                )}
                {currentStep === 1 && !distroSet && (
                    <DistroDiv>
                    </DistroDiv>
                )}
                {distroSet && (
                    <DistroDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                        <Distro url={DistroOb[0].url} id={DistroOb[0].id } style={ {backgroundColor: "rgba(0,0,0,0)"}}/>
                    </DistroDiv>
                )}
                {currentStep === 2  && !radiatorSet && (
                    <RadiatorDiv>
                    </RadiatorDiv>
                )}
                {radiatorSet && (
                    <RadiatorDiv style={ { opacity: 1, backgroundColor: "rgba(0,0,0,0)"}}>
                        <Radiator url={Rad[0].url} id={Rad[0].id } style={ {backgroundColor: "rgba(0,0,0,0)", width: '800px'}}/>
                    </RadiatorDiv>
                )}
                {currentStep === 3 &&  (
                    <>
                        {fittingList.map((fittingDiv, index) => (
                            <FittingDiv key={fittingDiv.id}
                                        style={{ bottom: fittingDiv.bottom, left: fittingDiv.left }}
                                        image={fittingDiv.image}
                            />
                        ))}
                    </>
                )}
                {fittingSet && (
                    <>
                        {fittingList.map((fittingDiv, index) => (
                            <FittingDiv key={fittingDiv.id}
                                        style={{ bottom: fittingDiv.bottom, left: fittingDiv.left }}
                                        image={fittingDiv.image}
                            />
                        ))}
                    </>
                )}
            </PCSide>
            <DraggableItems>
                <ul>
                        {currentStep === 0 && !cpuSet &&
                            CPUList.map((picture) => (
                                <li>
                                    <Cpu url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 1 && !distroSet &&
                            DistroList.map((picture) => (
                                <li>
                                    <Distro url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 2 && !radiatorSet &&
                            RadiatorList.map((picture) => (
                                <li>
                                    <Radiator url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 3 && !fittingSet &&
                            FittingList.map((picture) => (
                                <li>
                                    <Fitting url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                </ul>
            </DraggableItems>
        </>
    )
}

DragDrop.propTypes = {
    onStepChange: PropTypes.func.isRequired,
};
export default DragDrop