import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, height, width, color, data, type, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType="Category"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      xName="x"
      yName="y"
      type={type}
      dataSource={data}
      // To enable tooltip for sparkline
      tooltipSettings={{
        visible: true,
        // formatting tooltip text
        format: "${x} : data ${y}",
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
    // <SparklineComponent
    //   id={id}
    //   height={height}
    //   width={width}
    //   axisSettings={{
    //     minX: -1,
    //     maxX: 7,
    //     maxY: 8,
    //     minY: -1,
    //   }}
    //   fill={color}
    //   valueType="Category"
    //   xName="x"
    //   yName="y"
    //   dataSource={data}
    //   // To enable tooltip for sparkline with fill color customization
    //   tooltipSettings={{
    //     visible: true,
    //     format: "${x} : ${y}",
    //     trackLineSettings: {
    //       visible: true
    //     },
    //     textStyle: {
    //       color: "white",
    //     },
    //   }}
    // >
    //   <Inject services={[SparklineTooltip]} />
    // </SparklineComponent>
  );
};

export default SparkLine;
