import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import Svg, { Circle, G, Text as SvgText } from 'react-native-svg';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const radius = width / 3; // çember yarıçapı
const centerX = width / 2;
const centerY = radius + 50;

const items = Array.from({ length: 10 }, (_, i) => i + 1);

export default function FullCircleScroll() {
  const rotate = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      rotate.value = withSpring(rotate.value + event.translationX / 150, {
        damping: 20,
        stiffness: 120,
      });
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotate.value}rad` }],
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.circleContainer, animatedStyle]}>
          <Svg height={radius * 2 + 120} width={width}>
            <G origin={`${centerX}, ${centerY}`}>
              {items.map((item, i) => {
                const angle = (2 * Math.PI / items.length) * i;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);

                return (
                  <G key={item}>
                    <Circle cx={x} cy={y} r="25" fill="white" />
                    <SvgText
                      x={x}
                      y={y + 6}
                      fill="black"
                      fontSize="16"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {item}
                    </SvgText>
                  </G>
                );
              })}
            </G>
          </Svg>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    bottom: -250,
    backgroundColor: 'transparent',
  },
  circleContainer: {
    width: width,
    height: radius * 2 + 100,
  },
});
