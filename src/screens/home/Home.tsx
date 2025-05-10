import React from "react";
import { StyleSheet, Text, ScrollView, StatusBar, Image, View, Dimensions, } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Header from "../../widgets/Header";
import Clip from "../../widgets/Clip";
import TopBar from "../../widgets/TopBar";
const { width } = Dimensions.get('window');
const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} >
        <ScrollView style={styles.scrollView}>

          <Header />
          <TopBar></TopBar>
          <ScrollView horizontal={true}>
            <View
              style={[styles.card, { backgroundColor: "#FAF4F4" }]}>
              <Image
                resizeMode="contain"
                style={{ flex: 2, width: 200, right: -30, zIndex: 10 }} source={require("../../../assets/images/nike2.png")}>

              </Image>
              <View style={{ flexDirection: "row",
                  justifyContent: "space-between",}}>
                <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>$526.14</Text>
              <Text style={{ color: "#B7B4BB" }}>Save 20%</Text>
              </View>
               <View style={{borderColor:"#F1EEF5",padding:5,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:20,height:20}} source={require("../../../assets/images/add.png")}></Image>
               </View>
              </View>
            </View>
            <View
              style={[styles.card, { backgroundColor: "#F8F5FC" }]}>
              <Image
                resizeMode="contain"
                style={{ flex: 1, width: 200, right: -30, zIndex: 10 }} source={require("../../../assets/images/nike1.png")}>

              </Image>
          <View style={{ flexDirection: "row",
                  justifyContent: "space-between",}}>
                <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>$526.14</Text>
              <Text style={{ color: "#B7B4BB" }}>Save 20%</Text>
              </View>
               <View style={{borderColor:"#F1EEF5",padding:5,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:20,height:20}} source={require("../../../assets/images/add.png")}></Image>
               </View>
              </View>
            </View>
            <View
              style={[styles.card, { backgroundColor: "#E6F7EF", marginRight:40 }]}>
              <Image
                resizeMode="contain"
                style={{ flex: 1, width: 200, right: -30, zIndex: 10 }} source={require("../../../assets/images/nike3.png")}>

              </Image>
              <View style={{ flexDirection: "row",
                  justifyContent: "space-between",}}>
                <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>$526.14</Text>
              <Text style={{ color: "#B7B4BB" }}>Save 20%</Text>
              </View>
               <View style={{borderColor:"#F1EEF5",padding:5,borderWidth:1,borderRadius:100,justifyContent:"center",alignItems:"center"}}>
                <Image style={{width:20,height:20}} source={require("../../../assets/images/add.png")}></Image>
               </View>
              </View>
            </View>
          </ScrollView>
          <View style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  padding: 20,
          }}>
            <Text style={{
              fontSize: 20,
              fontWeight: "bold",
            }}>Most Popular</Text>
            <Clip label="View All" ></Clip>
          </View>

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  card: {
    marginTop: 20,
    marginLeft: 20,
    padding: 20,
    height: 300, width: 200, borderRadius: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  scrollView: {

    backgroundColor: 'white',
  },

});
export default HomeScreen;