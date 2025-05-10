import React from "react";
import { View, Text, StyleSheet,Dimensions,Image } from "react-native";
const { width } = Dimensions.get('window');


const Header = () => {
  return (
   <View style={{
    padding: 20,
    paddingBottom: 0,
               width: width - 20, flexDirection: 'row',
               justifyContent: 'space-between',
               paddingRight: 20,
               
             }}>
               <Text style={styles.text}>Explore <Text style={{
               fontFamily: 'Pacifico',
              fontWeight:"normal",
               color: "#7FE0CF",
               }}>New</Text> Collections</Text>
               <View style={{
   
                 width: 70, height: 50, borderRadius: 20, borderColor: "#F7F7F7", borderWidth: 1, justifyContent: "center", alignItems: "center"
               }}>
                 <Image source={require("../../assets/images/search.png")} style={{
                   width: 20,
                   height: 20,
                   tintColor: "black",
                 }}></Image>
               </View>
             </View>
  );
}
export default Header;
const styles = StyleSheet.create({
     text: {
     fontWeight: "bold",
    width:200,
    fontSize: 25,
    color: "#333",
  },
});