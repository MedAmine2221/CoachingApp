import { useRef } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";

const screenHeight = Dimensions.get("window").height;
interface AuthProps {
  slideHeight: number;
  slideAnim: Animated.Value;
}
const gestHandler = ({ slideHeight, slideAnim }: AuthProps) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0) {
          const newValue = Math.min(gestureState.dy, slideHeight);
          slideAnim.setValue(newValue);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dy > slideHeight / 3) {
          Animated.timing(slideAnim, {
            toValue: slideHeight,
            duration: 300,
            useNativeDriver: true,
          }).start();
        } else {
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  return panResponder;
};
export { screenHeight, gestHandler, AuthProps };
