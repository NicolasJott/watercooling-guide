import React, {useEffect, useState} from "react";
import CpuDiv from "./targets/CpuDiv";
import DistroDiv from "./targets/DistroDiv";
import RadiatorDiv from "./targets/RadiatorDiv";
import {DualInstallationSteps} from "../../config";
import FanDiv from "./targets/FanDiv";
import FittingDiv from "./targets/FittingDiv";
import CpuTubingDiv from "./targets/CpuTubingDiv";
import Cpu from "./parts/Cpu";
import Distro from "./parts/Distro";
import Radiator from "./parts/Radiator";
import Fan from "./parts/Fan";
import Fitting from "./parts/Fitting";
import Tubing from "./parts/Tubing";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";
import {DraggableItems, PCSide} from "../../styled/DragDrop";






function DualDragDrop({count, installStep, handleStepChange}) {
    const [backgroundImage, setBackgroundImage] = useState('../pcs/empty_pc.png');
    const [width, setWidth] = useState('80%')
    const [marginRight, setMarginRight] = useState('20px')
    const [marginTop, setMarginTop] = useState('0')

    const [cpuSet, setCpuSet] = useState(false)
    const [distroSet, setDistroSet] = useState(false)
    const [radiatorSet, setRadiatorSet] = useState(false)
    const [fanSet, setFanSet] = useState(false)
    const [flatSet, setFlatSet] = useState(false)
    const [cpuTopAngleSet, setCpuTopAngleSet] = useState(false)
    const [cpuRightAngleSet, setCpuRightAngleSet] = useState(false)
    const [gpuFittingsSet, setGpuFittingsSet] = useState(false)
    const [cpuTubingSet, setCpuTubingSet] = useState(false)
    const [gpuTubingSet, setGpuTubingSet] = useState(false)
    const [innerTubingSet, setInnerTubingSet] = useState(false)
    const [outerTubingSet, setOuterTubingSet] = useState(false)
    const [innerBottomSet, setInnerBottomSet] = useState(false)
    const [outerBottomSet, setOuterBottomSet] = useState(false)

    const [complete, setComplete] = useState(false)

    const [stepPictures, setStepPictures] = useState(null)

    useEffect(() =>  {
        setStepPictures(installStep.pictureList)
        console.log(installStep)
    }, [installStep])

    function handlePartDrop(id) {
        switch (id) {
            case 'cpu':
                handleStepChange()
                setCpuSet(true)
                break
            case 'distro':
                handleStepChange()
                setDistroSet(true)

                break
            case 'radiator':
                count +=1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 2) {
                    setRadiatorSet(true)
                    handleStepChange()
                }
                break
            case 'fan':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 6) {
                    setFanSet(true)
                    handleStepChange()
                }
                break
            case 'flat':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 8) {
                    setFlatSet(true)
                    handleStepChange()
                }
                break
            case 'topAngleCpu':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 2) {
                    setCpuTopAngleSet(true)
                    handleStepChange()
                }
                break
            case 'rightAngleCpu':
                setCpuRightAngleSet(true)
                handleStepChange()
                break
            case 'gpuFittings':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 2) {
                    setGpuFittingsSet(true)
                    handleStepChange()
                }
                break
            case 'cpuTubing':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 2) {
                    setCpuTubingSet(true)
                    handleStepChange()
                }
                break
            case 'gpuTubing':
                count += 1
                setStepPictures(prevList => prevList.slice(0,-1))
                if (count === 2) {
                    setGpuTubingSet(true)
                    handleStepChange()
                }
                break
            case 'innerTop':
                setInnerTubingSet(true)
                handleStepChange()
                break
            case 'outerTop':
                setOuterTubingSet(true)
                handleStepChange()
                break
            case 'innerBottom':
                setInnerBottomSet(true)
                handleStepChange()
                break
            case 'outerBottom':
                setOuterBottomSet(true)
                handleStepChange()
                break
            default:
                break
        }

    }

    const handleCoolantClick = () => {
        setBackgroundImage('../pcs/dual_full.png')
        setWidth('100%')
        setMarginRight('0')
        setMarginTop('20px')
        setComplete(true)
        handleStepChange()
    }




    return(
        <>
            <Helmet>
                <body className={complete ? 'complete': ''}/>
            </Helmet>
            <PCSide style={{ backgroundImage: `url(${backgroundImage})`, width: width, marginRight: marginRight, marginTop: marginTop}}>
                {!complete && stepPictures && (
                    <>
                        <CpuDiv
                            currentStep={installStep}
                            imageUrl={null}
                            onPartDrop={(e) => handlePartDrop('cpu')}
                        />
                        {cpuSet && (
                            <DistroDiv
                                currentStep={installStep}
                                imageUrl={null}
                                onPartDrop={(e) => handlePartDrop('distro')}
                            />
                        )}
                        {distroSet &&
                            DualInstallationSteps[2].RadiatorTargets.map((target) => (
                                <RadiatorDiv
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ zIndex: "10", top: target.top, left: target.left }}
                                    onPartDrop={(e) => handlePartDrop('radiator')}
                                />
                            ))
                        }
                        {radiatorSet &&
                            DualInstallationSteps[3].FanTargets.map((target) => (
                                <FanDiv
                                    key={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ top: target.top, left: target.left}}
                                    onPartDrop={(e) => handlePartDrop('fan')}
                                />
                            ))}
                        {fanSet &&
                            DualInstallationSteps[4].DistroFittingTargets.map((target) => (
                                <FittingDiv
                                    key={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left}}
                                    onPartDrop={(e) => handlePartDrop('flat')}
                                />
                            ))}
                        {flatSet &&
                            DualInstallationSteps[5].CpuFittingTargets.map((target) => (
                                <FittingDiv
                                    key={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, transform: target.transform, zIndex: target.zIndex}}
                                    onPartDrop={(e) => handlePartDrop('topAngleCpu')}
                                />
                            ))}
                        {cpuTopAngleSet &&
                            DualInstallationSteps[6].CpuFittingTargets.map((target) => (
                                <FittingDiv
                                    key={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, zIndex: target.zIndex}}
                                    onPartDrop={(e) => handlePartDrop('rightAngleCpu')}
                                />
                            ))}
                        {cpuRightAngleSet &&
                            DualInstallationSteps[7].FittingTargets.map((target) => (
                                <FittingDiv
                                    key={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, zIndex: target.zIndex, transform: target.transform}}
                                    onPartDrop={(e) => handlePartDrop('gpuFittings')}
                                />
                            ))}
                        {gpuFittingsSet &&
                            DualInstallationSteps[8].CpuTubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('cpuTubing')}
                                />
                            ))}
                        {cpuTubingSet &&
                            DualInstallationSteps[9].TubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('gpuTubing')}
                                />
                            ))}
                        {gpuTubingSet &&
                            DualInstallationSteps[10].TubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ top: target.top, right: target.right, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('innerTop')}
                                />
                            ))}
                        {innerTubingSet &&
                            DualInstallationSteps[11].TubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ top: target.top, right: target.right, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('outerTop')}
                                />
                            ))}
                        {outerTubingSet &&
                            DualInstallationSteps[12].TubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('innerBottom')}
                                />
                            ))}
                        {innerBottomSet &&
                            DualInstallationSteps[13].TubingTargets.map((target) => (
                                <CpuTubingDiv
                                    key={target.id}
                                    id={target.id}
                                    currentStep={installStep}
                                    imageUrl={null}
                                    style={{ bottom: target.bottom, left: target.left, width: target.width, height: target.height}}
                                    onPartDrop={(e) => handlePartDrop('outerBottom')}
                                />
                            ))}
                    </>
                )}
            </PCSide>
            <DraggableItems>
                {!complete && (
                    <ul>
                        {stepPictures &&
                            stepPictures.map(({ id, url }, i) => (
                                <li>
                                    {id === 'cpu' ? (
                                        <Cpu url={url} id={id} key={i}/>
                                    ) : id === 'distro' ? (
                                        <Distro url={url} id={id} key={i}/>
                                    ) : id === 'radiator' ? (
                                        <Radiator url={url} id={id} key={i}/>
                                    ) : id === 'fan' ? (
                                        <Fan url={url} id={id} />
                                    ) : id === 'flat' ? (
                                        <Fitting url={url} id={id} />
                                    ) : id === 'angleDistro' ? (
                                        <Fitting url={url} id={id} />
                                    ) : id === 'angleCPU' ? (
                                        <Fitting url={url} id={id} />
                                    ) : id === 'rightCpu' ? (
                                        <Fitting url={url} id={id} />
                                    ) : id === 'angleGPU' ? (
                                        <Fitting url={url} id={id} />
                                    ) : id === 'cpuTube' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'gpuTube' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'inner' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'outer' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'innerBottom' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'outerBottom' ? (
                                        <Tubing url={url} id={id} />
                                    ) : id === 'coolant' ? (
                                        <img src={url} id={id} style={{ width: "100px", cursor: "pointer"}} onClick={handleCoolantClick} />
                                    ) : null}
                                </li>
                            ))}
                    </ul>
                )}
            </DraggableItems>
        </>

    )
}
DualDragDrop.propTypes = {
    installStep: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    handleStepChange: PropTypes.func.isRequired,

};

export default DualDragDrop