import React from "react";
import { imageMap } from "../background/image_map"; // resim map'i
import { View, Text, StyleSheet,Image,ViewStyle,ImageStyle,TextStyle} from "react-native";
type ClipProps = {
    label?: string;
    image?: string;
      style?: ViewStyle; 
       textStyle?: TextStyle;   // yazıya özel stil
  imageStyle?: ImageStyle; // image'e özel stil
};
const Clip: React.FC<ClipProps> = ({label,image,style,textStyle,imageStyle}) => {
      const imgSource = image ? imageMap[image] : null;

    return (
        <View style={[styles.container,style]}>

            {
                image!= undefined&&image!=null&&image!="" ?<Image
                 resizeMode="contain"
                source={imgSource} style={[{width:20,height:20},imageStyle]}></Image>:null
            }
            {
                label!=undefined&&label!=null?<Text style={textStyle}>{label}</Text>:null
            }

        </View>
    );
}
export default Clip;
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        flexDirection: "row",
        borderColor: "#F8F8F8",
        paddingHorizontal: 20,
        paddingVertical: 5,
        backgroundColor: "#F8F8F8",
    },
    text: {
        fontSize: 20,
        color: "#333",
    },
});