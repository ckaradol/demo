import React, { useState } from "react";
import { imageMap } from "../background/image_map"; // resim map'i
import { View, Text, Pressable , StyleSheet, Image, ViewStyle, ImageStyle, TextStyle, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

const ImageSlider: React.FC<{
  images: string[];
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  textStyle?: TextStyle;
}> = ({ images, style, imageStyle, textStyle }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <View style={[ style]}>
      <Image
        resizeMode="contain"
        source={imageMap[selectedImage]}
        style={[{ width: width, height: 200 }]}
      />

      <View style={[styles.container]}>
        {images.map((image, index) => {
          const imgSource = imageMap[image];
          return (
            <Pressable  
              key={index}
              style={{zIndex: 100,}}
              onPress={() =>{
                console.log("Selected image:", image);
                setSelectedImage(image);

              }}>
                <Image
              
              resizeMode="contain"
              source={imgSource}
              style={[{ width: 50, height: 50, margin: 5 }, imageStyle]}
            />
            </Pressable >
          );
        })}
      </View>
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
});