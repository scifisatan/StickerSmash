import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { type ImageSource } from "expo-image";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "@/constants";

type Props = {
  emojiSize: number;
  stickerSource: ImageSource;
};

export default function EmojiSticker({ emojiSize, stickerSource }: Props) {
  const scale = useSharedValue(1); // used for changing size of emoji
  const emojiAngle = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      emojiAngle.value = withSpring(emojiAngle.value + 90);
    });

  // TODO:Implement pinch to resize
  // Left for now because hard to get right

  // const pinch = Gesture.Pinch()
  //   .hitSlop({
  //     height: emojiSize + 20,
  //     width: emojiSize + 20,
  //     bottom: 0,
  //     left: 0,
  //   })
  //   .onUpdate((e) => {
  //     if (e.scale < 1) {
  //       // Pinch in - make it half
  //       scale.value = withSpring(0.5);
  //     } else {
  //       // Pinch out - make it double
  //       scale.value = withSpring(2);
  //     }
  //     console.log(e.scale);
  //   })
  //   .onEnd(() => {
  //     translateX.value = Math.max(0, translateX.value);
  //     translateY.value = Math.max(0, translateY.value);

  //     translateX.value = Math.min(
  //       IMAGE_WIDTH - emojiSize * scale.value,
  //       translateX.value
  //     );
  //     translateY.value = Math.min(
  //       IMAGE_HEIGHT - emojiSize * scale.value,
  //       translateY.value
  //     );
  //   });

  const drag = Gesture.Pan().onChange((event) => {
    translateX.value += event.changeX;
    translateY.value += event.changeY;

    translateX.value = Math.max(0, translateX.value);
    translateY.value = Math.max(0, translateY.value);

    translateX.value = Math.min(
      IMAGE_WIDTH - emojiSize * scale.value,
      translateX.value
    );
    translateY.value = Math.min(
      IMAGE_HEIGHT - emojiSize * scale.value,
      translateY.value
    );
  });

  const EmojiStyle = useAnimatedStyle(() => {
    return {
      width: emojiSize * scale.value,
      height: emojiSize * scale.value,
    };
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
        {
          rotateZ: `${emojiAngle.value}deg`,
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
          style={EmojiStyle}
        />
      </Animated.View>
    </GestureDetector>
  );
}
