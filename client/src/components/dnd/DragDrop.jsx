import React, {useEffect, useState} from "react";
import {DraggableItems, PCSide} from "../Installation";
import {useDrop} from "react-dnd";
import PropTypes from "prop-types";

import {
    CpuFittingTargets,
} from "../../styled/DragDrop";
import {CPUList, DistroList, DistroFittingList, RadiatorList} from "../../config";

import Cpu from "./parts/Cpu";
import Distro from "./parts/Distro";
import Radiator from "./parts/Radiator";
import Fitting from "./parts/Fitting";
import FittingDiv from "./targets/FittingDiv";
import CpuFittingDiv from "./targets/CpuFittingDiv";
import AngleFitting from "./parts/AngleFitting";
import CpuDiv from "./targets/CpuDiv";
import DistroDiv from "./targets/DistroDiv";
import RadiatorDiv from "./targets/RadiatorDiv";
import Fan from "./parts/Fan";
import FanDiv from "./targets/FanDiv";



function DragDrop() {


    const [{isOver}, drop] = useDrop(() => ({
        accept: ['cpu', 'distro', 'radiator'],
        drop: (item, monitor) => {
            const itemType = monitor.getItemType();
            switch (itemType) {
                case 'cpu':
                    break;
                case 'distro':
                    break;
                case 'radiator':
                    break;
                default:
                    break;
            }
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));





    return(
        <dv></dv>

    )
}


export default DragDrop