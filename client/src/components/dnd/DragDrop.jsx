import React, {useEffect, useState} from "react";
import {DraggableItems, PCSide} from "../Installation";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";

import {
    CPUDiv,
    DistroDiv,
    RadiatorDiv,
    CpuFittingTargets,
    fittingDivs
} from "../../styled/DragDrop";
import {CPUList, DistroList, DistroFittingList, RadiatorList, CpuFittingList1} from "../../config";

import Cpu from "./parts/Cpu";
import Distro from "./parts/Distro";
import Radiator from "./parts/Radiator";
import Fitting from "./parts/Fitting";
import FittingDiv from "./targets/FittingDiv";
import CpuFittingDiv from "./targets/CpuFittingDiv";
import AngleFitting from "./parts/AngleFitting";



function DragDrop({ onStepChange, currentStep }) {
    const [cpuSet, setCpuSet] = useState(false)
    const [distroSet, setDistroSet] = useState(false)
    const [radiatorSet, setRadiatorSet] = useState(false)
    const [fittingSet, setFittingSet] = useState(false)
    const [distroFittingsDone, setDistroFittingsDone] = useState(false)
    const [fittingImages, setFittingImages] = useState(DistroFittingList);
    const [fittingList, setFittingList] = useState(fittingDivs);



    const [CPU, setCPU] = useState([])
    const [DistroOb, setDistroOb] = useState([])
    const [Rad, setRad] = useState([])


    const [{isOver}, drop] = useDrop(() => ({
        accept: ['cpu', 'distro', 'radiator'],
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

    function handleFittingDrop() {
            setFittingImages(prevState => prevState.slice(0, -1));
    }
    function ChangeStep() {
        onStepChange()
    }

    useEffect(() => {
        console.log(fittingImages);

        if (currentStep === 3 && fittingImages.length === 0) {
            setDistroFittingsDone(true);
            ChangeStep();
        }
    }, [fittingImages]);

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
                        {fittingDivs.map((fittingDiv, index) => (
                            <FittingDiv key={fittingDiv.id}
                                        id={fittingDiv.id}
                                        style={{ bottom: fittingDiv.bottom, left: fittingDiv.left }}
                                        imageUrl={null}
                                        onFittingDrop={handleFittingDrop}
                            />
                        ))}
                    </>
                )}
                {distroFittingsDone &&  (
                    <>
                        {fittingDivs.map((fittingDiv, index) => (
                            <FittingDiv key={fittingDiv.id}
                                        id={fittingDiv.id}
                                        style={{ bottom: fittingDiv.bottom, left: fittingDiv.left }}
                                        imageUrl={DistroFittingList[0].url}
                                        onFittingDrop={handleFittingDrop}
                            />
                        ))}
                    </>
                )}
                {currentStep === 4 && (
                    <>
                        {CpuFittingTargets.map((target) => (
                            <CpuFittingDiv id={target.id}
                                           key={target.id}
                                           style={{ bottom: target.bottom, left: target.left }}
                                           imageUrl={null}
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
                            fittingImages.map((picture) => (
                                <li>
                                    <Fitting url={picture.url} id={picture.id}/>
                                </li>
                            ))}
                        {currentStep === 4 &&
                            CpuFittingList1.map((picture) => (
                                <li>
                                    <AngleFitting url={picture.url} id={picture.id}/>
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