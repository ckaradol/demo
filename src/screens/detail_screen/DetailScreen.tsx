import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FullCircleScroll from "../../widgets/CircleMenu"; // Yarım daire menüsünü içe aktar
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  Cart: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const DetailScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={{ zIndex: 0, bottom: 0  }}>
        <FullCircleScroll />
      </GestureHandlerRootView>
      <Text style={{ zIndex: 10, bottom: 140,fontWeight:"bold"}}>SIZE</Text>
      <TouchableOpacity style={{
        zIndex: 10, bottom: 40, alignItems: "center",
        justifyContent: "center",
      }} onPress={() => navigation.navigate('Cart')}>
        <View style={styles.button}><Text style={styles.buttonText}>Order Now</Text></View>
      </TouchableOpacity>
    </View>
  );
}
export default DetailScreen;
const styles = StyleSheet.create({
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#7FE0CF",
    borderRadius: 5,
    padding: 10,
    bottom: 0,
    zIndex: 100,
    position: 'absolute',
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 200,

    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});