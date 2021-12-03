import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, FONTS } from '../constants'

const Viewers = ({viewersList}) => {
    if(viewersList?.length == 0){
        return(
            <View
             style={{
                 justifyContent:'center',
                 alignItems : 'center'
             }}
            >
                <Text
                    style={{
                        color:COLORS.lightGray2,
                        ...FONTS.body4
                    }}
                >Be the first one to try this</Text>
            </View>
        )
    }
    if(viewersList?.length <= 4){
        return(
            <View>
                {/* profile */}
                <View
                  style={{
                    marginBottom : 10,
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'flex-end'
                }}
                >
  {
                    viewersList.map((item , index)=>{
                        return(
                            <View
                                key={index}
                                style={{
                                    width : 50,
                                    height : 50,
                                    marginLeft : index == 0 ? 0  : -20
                                }}
                            >
                                <Image
                                    source={item.profilePic}
                                    style={{
                                        width :50,
                                        height:50,
                                        borderRadius :25
                                    }}
                                />
                            </View>
                        )
                    })
                }
                </View>
                {/* text */}
                <View>
                    <Text
                        style={{
                        ...FONTS.body4,
                        color:COLORS.lightGray2
                        }}
                    >{viewersList.length} People</Text>
                    <Text
                       style={{
                        ...FONTS.body4,
                        color:COLORS.lightGray2
                        }}
                    >cook this redipe</Text>
                </View>
            </View>
           
        )
    }
    if(viewersList?.length > 4){
        return(
            <View>
                {/* profile */}
                <View
                    style={{
                        marginBottom : 10,
                        flexDirection:'row',
                        alignItems:'center',
                        justifyContent:'flex-end'
                    }}
                >
                    {
                        viewersList?.map((item , index)=>{
                            if(index <= 2){
                                return(
                                    <View
                                    key={index}
                                    style={{
                                        width:50,
                                        height :50,
                                        marginLeft : index == 0 ? 0 : -20
                                    }}
                                >
                                    <Image
                                        source={item.profilePic}
                                        style={{
                                            width :50,
                                            height :50,
                                            borderRadius : 25
                                        }}
                                    />
                                </View>
                                )
                            }
                            if(index == 3){
                                return(
                                    <View
                                        key={index}
                                        style={{
                                            width:50,
                                            height :50,
                                            marginLeft : index == 0 ? 0 : -20,
                                            backgroundColor:COLORS.darkGreen,
                                            justifyContent:'center',
                                            alignItems:'center',
                                            borderRadius : 25
                                        }}
                                    >
                                        <Text
                                            style={{
                                                ...FONTS.body4,
                                                color:COLORS.gray2
                                            }}
                                        >+ {viewersList.length - 3}</Text>
                                    </View>
                                )
                            }
                        })
                    }
                </View>
                {/* text */}
                <View>
                    <Text
                        style={{
                        ...FONTS.body4,
                        color:COLORS.lightGray2
                        }}
                    >{viewersList.length} People</Text>
                    <Text
                       style={{
                        ...FONTS.body4,
                        color:COLORS.lightGray2
                        }}
                    >Already try this</Text>
                </View>
            </View>
        )
    }

}

export default Viewers
