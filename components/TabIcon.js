import React from 'react'
import { View, Text, Image } from 'react-native'
import {COLORS } from '../constants'

const TabIcon = ({focused , icon}) => {
    return (
        <View
            style={{
                width : 50,
                height : 80,
                alignItems:'center',
                justifyContent:'center'
            }}
        >
           <Image
            source={icon}
            resizeMode="contain"
            style={{
                width : 30,
                height : 30,
                tintColor : focused ? COLORS.darkGreen : COLORS.lightLime
            }}
           />
           {focused && 
                <View
                    style={{
                        height : 5,
                        backgroundColor : COLORS.darkGreen,
                        borderTopLeftRadius : 10,
                        borderTopRightRadius : 10,
                        position : 'absolute',
                        bottom : 0,
                        left : 0,
                        right : 0
                    }}
                />
           }
           
        </View>
    )
}

export default TabIcon
