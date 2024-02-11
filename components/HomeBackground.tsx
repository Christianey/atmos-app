import {
  Canvas,
  Line,
  LinearGradient,
  Rect,
  vec,
} from "@shopify/react-native-skia";
import {
  Image,
  ImageBackground,
  useWindowDimensions,
  StyleSheet,
  View,
} from "react-native";
import { styled } from "nativewind";
import useAppDimensions from "../hooks/useAppDimensions";
const HomeBackground = () => {
  const { width, height } = useAppDimensions();
  const StyledCanvas = styled(Canvas);
  const smokeHeight = height * 0.6;
  const smokeOffsetY = height * 0.4;

  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <StyledCanvas className="flex-1 overflow-scroll">
        <Rect x={0} y={0} width={width} height={height} color="blue">
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={["#2E335A", "#1C1B33"]}
          />
        </Rect>
      </StyledCanvas>
      <ImageBackground
        source={require("../assets/Background.png")}
        resizeMode="cover"
        className="h-full"
      >
        <Canvas
          style={{
            height: smokeHeight,
            ...StyleSheet.absoluteFillObject,
            top: smokeOffsetY,
          }}
        >
          <Rect x={0} y={0} width={width} height={smokeHeight} color="white">
            <LinearGradient
              start={vec(width / 2, 0)}
              end={vec(width / 2, smokeHeight)}
              colors={["rgba(58,63,84,0)", "rgba(58,63,84,1)"]}
              positions={[-0.02, 0.54]}
            />
          </Rect>
        </Canvas>
        <Image
          source={require("../assets/House.png")}
          width={width}
          height={width}
          resizeMode="cover"
          className={"absolute top-[36%]"}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeBackground;
