import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  Canvas,
  Circle,
  Line,
  LinearGradient,
  Shadow,
  vec,
} from "@shopify/react-native-skia";

const CircleButton = ({
  radius,
  pressed,
}: {
  radius: number;
  pressed: boolean;
}) => {
  const diameter = radius * 2;
  return (
    <Canvas
      style={{
        width: diameter,
        height: diameter,
      }}
    >
      <Circle cx={radius} cy={radius} r={radius}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(diameter, diameter)}
          colors={pressed ? ["#BBBFC7", "#F5F5F9"] : ["#FFFFFF ", "#DADFE7"]}
        />
        <Shadow dx={1} dy={1} blur={0.5} color="white" inner />
      </Circle>
      <Line
        p1={vec(radius - radius / 3, radius)}
        p2={vec(radius + radius / 3, radius)}
        style={"stroke"}
        color={"#48319D"}
        strokeCap={"round"}
        strokeWidth={4}
      />
      <Line
        p1={vec(radius, radius - radius / 3)}
        p2={vec(radius, radius + radius / 3)}
        style={"stroke"}
        color={"#48319D"}
        strokeCap={"round"}
        strokeWidth={4}
      />
    </Canvas>
  );
};

export default CircleButton;
