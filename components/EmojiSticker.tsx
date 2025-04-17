import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { type ImageSource } from "expo-image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/app/(tabs)";

type Props = {
  index: number;
  imageSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ imageSize, stickerSource }: Props) {
  const scaleImage = useSharedValue(imageSize);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const limitStickerDrag = () => {
    translateX.value = Math.max(0, translateX.value);
    translateY.value = Math.max(0, translateY.value);

    translateX.value = Math.min(
      IMAGE_WIDTH - scaleImage.value,
      translateX.value
    );
    translateY.value = Math.min(
      IMAGE_HEIGHT - scaleImage.value,
      translateY.value
    );
  };
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = scaleImage.value * 2;
      } else {
        scaleImage.value = Math.round(scaleImage.value / 2);
      }
      limitStickerDrag();
    });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;
    limitStickerDrag();
    console.log(translateX.value, translateY.value);
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      position: "absolute",
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={Gesture.Simultaneous(drag, doubleTap)}>
      <Animated.View style={containerStyle}>
        <Animated.Image
          source={stickerSource}
          resizeMode="contain"
          style={[imageStyle, { width: imageSize, height: imageSize }]}
        />
      </Animated.View>
    </GestureDetector>
  );
}
