import React from "react";
import { View, Text, StyleSheet ,Image} from "react-native";
import { imageMap } from "../background/image_map"; // resim map'i
type ListTileProps = {
    label?: string;
       subtitle?: string;
           indirim?: string;
    image?: string;
    color?: string;
    
};

const ListTile:React.FC<ListTileProps> = ({label,image,subtitle,indirim,color}) => {
    const imgSource = image ? imageMap[image] : null;
  return (
    <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderColor: "#F3F8F4",
            borderWidth: 1,
            borderRadius: 20,
            marginHorizontal: 20, 
            marginVertical: 10,
            alignItems: "center",           
           }}>
            <View style={{flexDirection: "row",}}> 
            <View style={{
              backgroundColor:color??"#D7EDFA",
              width: 70,
              height: 70,
              borderRadius: 20,
              padding: 20,
              marginRight: 20,
            }}>
              <Image
                resizeMode="contain"
                style={{height:70, width: 70,bottom:20, right: 10, zIndex: 10 }} source={imgSource}>

              </Image>
                   
            </View>
            <View style={{justifyContent:"center",alignItems:"flex-start"}}><Text style={{fontWeight:"bold", fontSize:20}}>{label}</Text>
            <Text style={{color:"#CBCBCB"}}>{subtitle}</Text>
            </View>
           </View>
            <View style={{width: 50,
    height: 50,
    borderRadius: 25, 
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: color??"#D7EDFA",}}>
      <Text style={{fontWeight:"bold"}}>{indirim}</Text>
      <Text style={{color:"#8EA1A8"}}>off</Text>
    </View>
    
           </View>
  );
}
export default ListTile;