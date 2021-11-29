import React from 'react'
import { 
    View,
   Text,
   TouchableOpacity,
   Image
} from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

const CategoriCard = ({categoriItem , onPress , containerCustomStyle}) => {
    return (
        <TouchableOpacity
            style={{
                padding : 10,
                flexDirection:'row',
                alignItems:'center',
                marginTop : 10,
                backgroundColor:COLORS.gray2,
                marginHorizontal : 10,
                ...containerCustomStyle
            }}
            onPress={onPress}
        >
            <Image
                source={categoriItem.image}
                resizeMode="cover"
                style={{
                    width : 100,
                    height : 100,
                    borderRadius : SIZES.radius
                }}
            />
            <View style={{flex : 1, paddingHorizontal : SIZES.padding
                ,height : '100%',
            }}>
                {/* name */}
                <Text
                    style={{
                        color:COLORS.black,
                        ...FONTS.h2,
                        width : "80%"
                    }}
                >{categoriItem.name}</Text>
                {/* services */}
                <Text
                    style={{

                        color:COLORS.gray,
                        ...FONTS.body4,
                        position:'absolute',
                        bottom : 0,
                        left : SIZES.padding,
                    }}
                >{categoriItem.duration} | {categoriItem.serving}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default CategoriCard
