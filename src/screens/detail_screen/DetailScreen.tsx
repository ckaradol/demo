import React from "react";
import { View, Text, StyleSheet } from "react-native";
import FullCircleScroll from "../../widgets/CircleMenu"; // Yarım daire menüsünü içe aktar
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
       <GestureHandlerRootView style={styles.container}>
          <FullCircleScroll />
        </GestureHandlerRootView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});