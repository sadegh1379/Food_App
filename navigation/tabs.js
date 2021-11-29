import React from "react";
import {
    View,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import {COLORS , icons} from '../constants'
import { Home , Search , BookMark , Settings } from "../screens"
import { TabIcon } from "../components";

const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <Tab.Navigator
           screenOptions={{
               headerShown : false,
               tabBarShowLabel : false,
               tabBarStyle:{
                   position : 'absolute',
                   left : 0,
                   right : 0,
                   bottom : 0,
                   height : 80,
                   borderTopColor : COLORS.darkGreen
               }
           }}
        >
            <Tab.Screen
                name="Tabs"
                component={Home}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon={icons.home}
                    />
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon={icons.search}
                    />
                }}
            />
            <Tab.Screen
                name="Bookmark"
                component={BookMark}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon={icons.bookmark}
                    />
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon:({focused})=><TabIcon 
                        focused={focused}
                        icon={icons.settings}
                    />
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;