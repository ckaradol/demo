import React from "react";
import Clip from "./Clip";
import { View, Text, StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');

const TopBar = () => {
    return (
        <View style={{
    padding: 20,
                paddingBottom: 0,
                paddingTop: 0,
                      width: width - 20, flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingRight: 20,
                      marginTop: 20,
                    }}>
                    <Clip label="All" ></Clip>
                     <Clip label="Nike" imageStyle={{tintColor:"#E7EC8E"}} textStyle={{color:"white"}} image="nike" style={{backgroundColor:"#141414"}}></Clip>
                      <Clip image="adidas" ></Clip>
                       <Clip image="puma"></Clip>
                       <Clip image="jorden"></Clip>
                   </View>
    );
    }
export default TopBar;