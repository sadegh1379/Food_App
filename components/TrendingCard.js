import React from 'react'
import { View, Text, 
    Image,
    TouchableOpacity,
    ImageBackground

} from 'react-native'
import { COLORS , icons ,images , FONTS, SIZES } from '../constants'

const TrendingCard = ({trendingItem , customStyle , onPress}) => {
    return (
        <TouchableOpacity
            style={{
                width : 250,
                height : 350,
                marginRight : SIZES.base,
                marginVertical : SIZES.base,
                borderRadius : SIZES.radius,
                overflow:'hidden'
            }}
            onPress={onPress}
        >
        <ImageBackground
            source={trendingItem.image}
            style={{
                width:250,
                height : 350,
                borderRadius:SIZES.radius
            }}
        >
            {/* category */}
            <View style={{
                paddingHorizontal : SIZES.radius,
                paddingVertical :5,
                backgroundColor:COLORS.transparentGray,
                position:'absolute',
                top : 12,
                left : 12,
                borderRadius:SIZES.radius
            }}>
                <Text
                    style={{
                        color :COLORS.white,
                        ...FONTS.h3
                    }}
                >{trendingItem.category}</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
    )
}

export default TrendingCard
