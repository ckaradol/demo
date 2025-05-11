import React, { useState, useEffect } from 'react';
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
const radius = width / 1.2;
const centerX = width / 2 + 200;
const centerY = radius + 50;

const items = Array.from({ length: 40 }, (_, i) => i + 1);

export default function FullCircleScroll() {
  const rotate = useSharedValue(0);
  const [selectedItem, setSelectedItem] = useState(1);

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

  // useEffect ile rotate.value değişimini takip etmek için bir köprü kur
  useEffect(() => {
    const interval = setInterval(() => {
      const angles = items.map((_, i) => ((2 * Math.PI) / items.length) * i + rotate.value);
      const positions = angles.map((angle, i) => ({
        item: items[i],
        y: centerY + radius * Math.sin(angle),
      }));
      const minY = Math.min(...positions.map((p) => p.y));
      const closestItem = positions.find((p) => Math.abs(p.y - minY) < 1);

      if (closestItem && closestItem.item !== selectedItem) {
        setSelectedItem(closestItem.item);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [selectedItem]);

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.circleContainer, animatedStyle]}>
          <Svg height={radius * 2 + 120} width={width + 400} style={{ borderRadius: (width + 400) / 2, backgroundColor:"white"}}>
            <G origin={`${centerX}, ${centerY}`}>
              {items.map((item, i) => {
                const angle = ((2 * Math.PI) / items.length) * i;
                const x = centerX + radius * Math.cos(angle);
                const y = centerY + radius * Math.sin(angle);
                const isSelected = item === selectedItem;

                return (
                  <G key={item}>
                     <Circle
                      cx={x}  
                      cy={y}
                      r={isSelected ? "26.2" : "10"}
                      fill="rgba(0, 0, 0, 0.3)"
                      stroke="white"
                      strokeWidth={isSelected ? 2 : 0}
                    />
                    <Circle cx={x} cy={y} r={isSelected ?"25":"10"} fill={"white"}/>
                    {
                       (
                        <Circle
                          cx={x}
                          cy={y-15}
                          r="4"
                          fill={ isSelected?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 0.3)"}
                          stroke="white"
                          transform={`rotate(${((angle + 20.5) * 180) / Math.PI}, ${x}, ${y})`}
                          strokeWidth={2}
                        />
                      )
                    }
                    <SvgText
                      x={x}
                      y={y + 10}
                      fill={ isSelected?"rgba(0, 0, 0, 1)":"rgba(0, 0, 0, 0.3)"}
                      fontSize="20"
                      fontWeight={isSelected? "bold":"normal"}
                      textAnchor="middle"
                      transform={`rotate(${((angle + 20.5) * 180) / Math.PI}, ${x}, ${y})`}
                    >
                      {item.toString()}
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
    bottom: -500,
    backgroundColor: 'transparent',
  },
  circleContainer: {
    width: width + 400,
    height: radius * 2 + 100,
  },
});
