import React from 'react'
import { TouchableOpacity , Text } from 'react-native';
import {COLORS , FONTS} from '../constants'
import LinearGradient from 'react-native-linear-gradient';

const CustomTextButton = ({title , customButtonStyle , onPress , colors }) => {
    if(colors.length > 0){
        return(
            <TouchableOpacity onPress={onPress}
           
            >
                <LinearGradient
                    start={{x:0,y:0}}
                    end={{x:1 , y:0}}
                    colors={colors}
                    style={{
                        ...customButtonStyle
                    }}
                   
                >
                    <Text
                        style={{
                            ...FONTS.h3,
                            color : COLORS.white,
                            textAlign :'center'
                        }}
                    >{title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    }else{
        return(
            <TouchableOpacity onPress={onPress}
                style={{
                    ...customButtonStyle
                }}
            >
                    <Text
                        style={{
                            ...FONTS.h3,
                            color : COLORS.white,
                            textAlign :'center'
                        }}
                    >{title}</Text>
            </TouchableOpacity>
        )
    }
}

export default CustomTextButton
