import React,{useEffect} from "react";
import ListTile from "../../widgets/ListTile";
import { View, Text, StyleSheet,ScrollView,Image,Button, } from "react-native";
import Orientation from 'react-native-orientation-locker';
const CardScreen=()=>{
    useEffect(() => {
  Orientation.unlockAllOrientations(); // sadece dikey mod
  return () => Orientation.lockToPortrait(); // component kapanınca resetle
}, []);
    return(
        <View style={styles.container}>
          <ScrollView style={styles.container}>
            <ListTile color="#B04549" image="nike1" indirim="20%"label="Jorden 1 White" subtitle="$566.18"/>
            <ListTile color="#F6F4DF" image="nike2" indirim="15%"label="Mid Cocounat Nike" subtitle="$196.20"/>
            <ListTile color="#CDEE69" image="nike3" indirim="25%"label="Mid Cocounat Nike" subtitle="$195.20"/>
            <Text style={{fontSize:20,fontWeight:"bold",marginLeft:20,marginTop:20}}>Apply Coupon</Text>
            <View style={{backgroundColor:"#F5F5F5", flexDirection: "row", padding:20, margin:20, borderRadius:20,alignItems:"center",      justifyContent: "space-between",}}>
                <Text>#NikeAirShoes</Text>
                <Image style={{width:20,height:20}} source={require("../../../assets/images/check.png")}></Image>
            </View>
            <View style={{ flexDirection: "row", margin:20,marginTop:0,alignItems:"center",      justifyContent: "space-between",}}>
                <Text style={{color:"#CECECE"}}>Item Price</Text>
                <Text>$83.96</Text>
            </View>
            <View style={{ flexDirection: "row", margin:20,marginTop:0,alignItems:"center",      justifyContent: "space-between",}}>
                <Text style={{color:"#CECECE"}}>Coupen Code Discount</Text>
                <Text style={{color:"#E99B9B"}}>- $10.96</Text>
            </View>
            <View style={{ flexDirection: "row", margin:20,marginTop:0,alignItems:"center",      justifyContent: "space-between",}}>
                <Text style={{color:"#CECECE"}}>Shipping Changes</Text>
                <Text>$17.05</Text>
            </View>
             <View style={{ flexDirection: "row", margin:20,marginTop:10,alignItems:"center",      justifyContent: "space-between",}}>
                <Text style={{color:"#1A1A1A",fontWeight:"bold"}}>Total Amount</Text>
                <Text style={{color:"#1A1A1A",fontWeight:"bold"}}>$90.00</Text>
            </View>
        </ScrollView>
        <View style={{margin:20,marginTop:0,}}>
            <Button color={"#6FE2D1"} title="Procced To Pay"></Button>
        </View>
        </View>
    )
}
export default CardScreen;
const styles = StyleSheet.create({
    container: {
       flex:1,backgroundColor:"#fff"
      },
      text: {
        fontSize: 20,
        color: "#333",
      },
})