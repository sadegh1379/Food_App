import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {COLORS, icons, images, FONTS, SIZES} from '../constants';

const TrendingInfo = ({item}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 90,
        backgroundColor: COLORS.transparentDarkGray,
        borderRadius: SIZES.radius,
        paddingHorizontal: SIZES.radius,
        paddingVertical: SIZES.radius,
      }}>
      <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'flex-start'
      }}>
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          {item.name}
        </Text>
        <TouchableOpacity>
          <Image
            source={item.isBookmark ?  icons.bookmarkFilled : icons.bookmark}
            style={{
              width: 20,
              height: 20,
              tintColor: COLORS.darkGreen ,
              
            }}
          />
        </TouchableOpacity>
      </View>
      <Text
            style={{
                ...FONTS.body4,
                color:COLORS.gray,
                position:'absolute',
                bottom : 5,
                left:10
            }}
          >{item.duration} | serving{item.serving}</Text>
    
    </View>
  );
};

const TrendingCard = ({trendingItem, customStyle, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        width: 250,
        height: 350,
        marginRight: SIZES.base,
        marginVertical: SIZES.base,
        borderRadius: SIZES.radius,
        overflow: 'hidden',
      }}
      onPress={onPress}>
      <ImageBackground
        source={trendingItem.image}
        style={{
          width: 250,
          height: 350,
          borderRadius: SIZES.radius,
        }}>
        {/* category */}
        <View
          style={{
            paddingHorizontal: SIZES.radius,
            paddingVertical: 5,
            backgroundColor: COLORS.transparentGray,
            position: 'absolute',
            top: 12,
            left: 12,
            borderRadius: SIZES.radius,
          }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}>
            {trendingItem.category}
          </Text>
        </View>
        <TrendingInfo item={trendingItem} />
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default TrendingCard;
