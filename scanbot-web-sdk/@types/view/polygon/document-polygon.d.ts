import React from "react";
import { Point } from "../../utils/dto/Point";
declare class DocumentPolygon extends React.Component<any, any> {
    polygon: SVGPolygonElement;
    latestValidPoints: Point[];
    constructor(props: any);
    update(points: Point[], animatedPoints: Point[], isOk: boolean, isVisible: boolean): void;
    pointStringOrLatestValidPoints(points: Point[]): string;
    render(): React.ReactNode;
}
export default DocumentPolygon;
