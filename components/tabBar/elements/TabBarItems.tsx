import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import ListIcon from "../icons/ListIcon";
import MapIcon from "../icons/MapIcon";
import TrapezoidBg from "./TrapezoidBg";
import useAppDimensions from "../../../hooks/useAppDimensions";
import CircleButton from "./CircleButton";

const TabBarItems = () => {
  const { width, height } = useAppDimensions();
  const trapezoidHeight = height * 0.12;
  const trapezoidWidth = width * 0.68;
  const circleRadius = (trapezoidHeight * 0.51) / 2;
  const buttonCenterX = width / 2 - circleRadius;
  return (
    <View className="flex-1 flex-row items-center justify-between px-8">
      <MapIcon />
      <TrapezoidBg width={trapezoidWidth} height={trapezoidHeight} />
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          left: buttonCenterX,
          top: 12,
          width: circleRadius * 2,
          height: circleRadius * 2,
        }}
      >
        {({ pressed }) => (
          <CircleButton radius={circleRadius} pressed={pressed} />
        )}
      </Pressable>
      <ListIcon />
    </View>
  );
};

export default TabBarItems;
