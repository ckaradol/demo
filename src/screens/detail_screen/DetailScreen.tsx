import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import FullCircleScroll from "../../widgets/CircleMenu"; // Yarım daire menüsünü içe aktar
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ImageSlider from "../../widgets/ImageSlider";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
type RootStackParamList = {
  Cart: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Cart'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const DetailScreen: React.FC<Props> = ({ navigation }) => {
  function formatNumber(number:number):string {
  return number < 10 ? `0${number}` : `${number}`;
}

  const [count, setCountValue] = React.useState(1)
   function addCount():void {
  setCountValue(count + 1);
}
function removeCount():void {
  if(count<=1){
    setCountValue(1);
    return;
  }

  setCountValue(count - 1);
}
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 10, position: 'absolute', top: 0 }}>
        <ImageSlider
          images={["nike1", "nike2", "nike3"]}
          style={{
            height: 200,
            zIndex: 10,
          }}
          imageStyle={{ width: 70, height: 70, borderRadius: 20, borderColor: "#F7F7F7", borderWidth: 1, backgroundColor: "#fff", margin: 10 }}
          textStyle={{ fontSize: 20, color: "#333" }}
        /></View>

      <View style={{
        position: 'absolute',
        flexDirection: "row",
        justifyContent: "space-between",
        height: 100,
        padding: 20,
        width: "100%",
        zIndex: 10,
      }}>
        <View style={{ maxWidth: 200 }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Jordan 1 Retro High Og Prototype</Text>
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#CB7C41" }}>$526.14 <Text style={{ fontSize: 14, fontWeight: "normal", color: "#CBD0D6" }}>Save flat 20%</Text></Text>
        </View>
        <View>
          <View style={{alignItems: "center", justifyContent: "center" }}>
            <TouchableOpacity
            onPress={addCount}
            style={{ borderColor: "#331761", backgroundColor: "#411380", padding: 5, borderWidth: 1, borderRadius: 40, justifyContent: "center", alignItems: "center", width: 40, height: 40, }}>
              <Image style={{ width: 20, height: 20, tintColor: "#D0B3F3" }} source={require("../../../assets/images/add.png")}></Image>
            </TouchableOpacity>
             <Text style={{ color: "#494949", padding:5}}>{formatNumber(count)}</Text>
          <TouchableOpacity
           onPress={removeCount}
          style={{ borderColor:count<=1?"#FAFAFA" :"#331761", backgroundColor: count<=1?"fff":"#411380", padding: 5, borderWidth: 1, borderRadius: 40, justifyContent: "center", alignItems: "center", width: 40, height: 40, }}>
            <Image style={{ width: 20, height: 20, tintColor: "#D0B3F3" }} source={require("../../../assets/images/remove.png")}></Image>
          </TouchableOpacity>
          </View>
         
        </View></View>
      <GestureHandlerRootView style={{ zIndex: 0, bottom: 0 }}>
        <FullCircleScroll />
      </GestureHandlerRootView>
      <Text style={{
        zIndex: 10, bottom: 100, fontWeight: "bold", position: 'absolute',
      }}>SIZE</Text>
      <TouchableOpacity style={{
        position: 'absolute', bottom: 0, alignItems: "center",
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