import { Canvas, LinearGradient, Path, vec } from "@shopify/react-native-skia";
import React from "react";
import { StyleSheet } from "react-native";

interface ArcProps {
  height: number;
  width: number;
}

const Arc = ({ height, width }: ArcProps) => {
  const arcPath = `M 0 0 Q ${width / 2}  ${
    height / 2
  } ${width} 0 L ${width} ${height} L 0 ${height} Z`;

  const arcBorder = `M 0 0 Q ${width / 2}  ${height / 2} ${width} 0`;
  return (
    <Canvas style={{ height, width, ...StyleSheet.absoluteFillObject }}>
      <Path path={arcPath}>
        <LinearGradient
          start={vec(width / 2, 0)}
          end={vec(width / 2, height)}
          colors={["rgba(58,58,106, 1)", "rgba(37,36,77, 1)"]}
        />
      </Path>
      <Path
        path={arcBorder}
        style="stroke"
        strokeWidth={2}
        color={"rgba(117,130,244, .5)"}
      />
    </Canvas>
  );
};

export default Arc;
