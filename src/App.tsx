/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigationBar from "./widgets/BottomNavigationBar";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardScreen from './screens/card_screen/card_screen';
import DetailScreen from './screens/detail_screen/DetailScreen';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={'light-content'} />
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home" component={BottomNavigationBar} />
          <Stack.Screen
            options={{
              title: 'Payment Method',
              headerTintColor: '#40355F',
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: { fontWeight: 'bold' },
            }}
            name="Cart" component={CardScreen} />
        <Stack.Screen
            options={{
              title: '',
              headerTintColor: '#40355F',
              headerTitleAlign: "center",
              headerShadowVisible: false,
              headerTitleStyle: { fontWeight: 'bold' },
            }}
            name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>

      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
