import React from "react";
import { View } from "react-native";
import Arc from "./elements/Arc";
import useAppDimensions from "../../hooks/useAppDimensions";
import TabBarItems from "./elements/TabBarItems";

const WeatherTabBar = () => {
  const tabBarHeight = 88;
  const { width, height } = useAppDimensions();
  return (
    <View className="h-[88] absolute bottom-0 left-0 right-0  top-[calc(100%-88)]">
      <Arc height={tabBarHeight} width={width} />
      <TabBarItems />
    </View>
  );
};

export default WeatherTabBar;
