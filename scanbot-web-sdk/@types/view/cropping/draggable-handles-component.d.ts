import React from "react";
import { MagneticLine } from "../../utils/dto/MagneticLine";
import { DraggablePointsContainer } from "./draggable-points-container";
import { DraggableLinesContainer } from "./draggable-lines-container";
import { Size } from "../../utils/dto/Size";
import { CroppingViewPolygonHandleStyle } from "../../model/configuration/cropping-view-configuration";
import type { MovingLine } from "./draggable-base-container";
interface DraggableHandlesComponentProps {
    containerSize: Size;
    coordinatePoints: any;
    rotations: number;
    scale: number;
    style: CroppingViewPolygonHandleStyle;
    cornerMoveStart: any;
    cornerMoved: any;
    cornerMoveEnd: any;
    lineMoved: (data: MovingLine) => void;
}
export declare class DraggableHandlesComponent extends React.Component<DraggableHandlesComponentProps, {}> {
    corners: DraggablePointsContainer;
    lines: DraggableLinesContainer;
    render(): React.JSX.Element;
    setFrame(): void;
    snapTo(data: {
        magneticLine: MagneticLine;
        polygonLine: MovingLine;
    }): void;
}
export {};
