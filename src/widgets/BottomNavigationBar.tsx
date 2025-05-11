import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Image, Dimensions, TouchableOpacity } from "react-native";
import Svg, { Path } from "react-native-svg";
import HomeScreen from "../screens/home/Home";
import CategoryScreen from "../screens/category/category";
import SearchScreen from "../screens/search/Search";
import BoxScreen from "../screens/box/box";
import ProfileScreen from "../screens/profile/Profile";
import { getPathDown } from "./utils/getPathDown";

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get("window");
const TAB_HEIGHT = 70;

const CustomTabBarButton = ({ children, onPress }: any) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: "#6CE2D2",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "white",
        shadowRadius: 5,
        shadowOffset: {
          width: 10,
          height: 10,
        },
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const CustomTabBarBackground = () => {
  const path = getPathDown(width, TAB_HEIGHT, 50,true,"CENTER"); // ortada 90 px’lik çukur

  return (
    <Svg
      width={width}
      height={TAB_HEIGHT }
      style={{ position: "absolute", bottom: 0 }}
    >
      <Path d={path} fill="black" />
    </Svg>
  );
};

const TabIcon = ({ source, focused, color, size }: any) => (
  <View style={{ alignItems: "center" }}>
    <Image
      source={source}
      style={{
        marginTop: 10,
        width: size,
        height: size,
        tintColor: color,
      }}
    />
    {focused && (
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 3,
          backgroundColor: color,
          marginTop: 4,
        }}
      />
    )}
  </View>
);

const BottomNavigationBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#CACACA",
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: TAB_HEIGHT,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => <CustomTabBarBackground />,
      }}
    >
      <Tab.Screen
        name="Anasayfa"
        component={HomeScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIcon {...props} source={require("../../assets/images/home.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Kategori"
        component={CategoryScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIcon {...props} source={require("../../assets/images/category.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Ara"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              resizeMode="contain"
              source={require("../../assets/images/search.png")}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Box"
        component={BoxScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIcon {...props} source={require("../../assets/images/box.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfileScreen}
        options={{
          tabBarIcon: (props) => (
            <TabIcon {...props} source={require("../../assets/images/profile.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationBar;
