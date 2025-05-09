import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BoxScreen from "../screens/box/box";

import HomeScreen from "../screens/home/Home";
import CategoryScreen from "../screens/category/category";
import ProfileScreen from "../screens/profile/Profile";
import SearchScreen from "../screens/search/Search";
import ReactNative from "react-native";
import React, { ReactNode, isValidElement, ReactElement } from "react";
const Tab = createBottomTabNavigator();
type Props = {

  children: ReactNode;
  onPress?: any;
};
const CustomTabBarButton = ({ children, onPress }: Props) => {
  let childStyle = {};

  // Eğer JSX elementi ise, style'ını al
  if (isValidElement(children)) {
    const element = children as ReactElement<{ style?: any }>;
    childStyle = element.props.style ?? {};
  }
  return (
    <ReactNative.TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...childStyle,
      }}
      onPress={(e) => {
        onPress && onPress();
      }}
    >
      <ReactNative.View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}>
        {children}
      </ReactNative.View>

    </ReactNative.TouchableOpacity>
  )
};
const BottomNavigationBar = () => {
  return (
    <Tab.Navigator

      screenOptions={{
        tabBarShowLabel: false,
        sceneStyle: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
          height: "100%",
        },
        tabBarActiveTintColor: "white",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,

          right: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 0,
          backgroundColor: "black",

          height: 60,
        },
      }}
    >
      <Tab.Screen name="Anasayfa" component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ReactNative.Image
              source={require("../../assets/images/home.png")}
              style={{
                marginTop: 10,
                width: size, height: size, tintColor: color
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Kategori" component={CategoryScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ReactNative.Image
              source={require("../../assets/images/category.png")}
              style={{
                marginTop: 10,
                width: size, height: size, tintColor: color
              }}
            />
          ),
        }} />
      <Tab.Screen name="Ara" component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ReactNative.Image
              resizeMode="contain"
              source={require("../../assets/images/search.png")}
              style={{

                width: 30, height: 30, tintColor: color
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          ),
        }} />
      <Tab.Screen name="Box" component={BoxScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ReactNative.Image
              source={require("../../assets/images/box.png")}
              style={{
                marginTop: 10,
                width: size, height: size, tintColor: color
              }}
            />
          ),
        }}
      />
      <Tab.Screen name="Profil" component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ReactNative.Image
              source={require("../../assets/images/profile.png")}
              style={{
                marginTop: 10,
                width: size, height: size, tintColor: color
              }}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
}
export default BottomNavigationBar;