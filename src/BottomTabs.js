import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from './constants/index'
import Home from "./Home";
import Matches from "./Matches";
import Updates from "./Updates";
export default function BottomTabs() {
    const size = 28
    const Tab = createBottomTabNavigator();    
    return ( 
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                  headerShown: false,
                  tabBarShowLabel: false,
                  tabBarActiveTintColor: "#FOFOFO",
                  tabBarHideOnKeyboard:true,
                  tabBarInactiveTintColor: "#CDCDCD",
                  tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                      case "home":
                        return (
                          <Icon
                              name="home"
                              size={size}
                              color={focused ? COLORS.faint : "#ccc"}
                            />
                        );
                      case "matches":
                        return (
                            <Icon
                              name="open-in-new"
                              size={size}
                              color={focused ? COLORS.faint : "#ccc"}
                            />
                          )
                        case "Updates":
                          return (
                            <Icon
                              name="autorenew"
                              size={size}
                              color={focused ? COLORS.faint : "#ccc"}
                            />
                          )
                      default:
                        return null;
                    }}
                })}
            >
            <Tab.Screen name='home' component={Home} />
          <Tab.Screen name='matches' component={Matches} />
          <Tab.Screen name='Updates' component={Updates} />
          </Tab.Navigator>
        </NavigationContainer>
    )
}