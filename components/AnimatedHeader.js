import React from 'react';
import { Animated, View , Text} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '../constants';

const HEADER_HEIGHT = 50

const AnimatedHeader = ({animatedValue , title}) => {
    const insets = useSafeAreaInsets();

    const headerHeight = animatedValue.interpolate({
        inputRange: [1, HEADER_HEIGHT +80 ],
        outputRange: [HEADER_HEIGHT , insets.top +350 ],
        extrapolate: 'clamp'
      });

  return(
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: COLORS.transparentGray,
        justifyContent:'center',
        alignItems:'center'
      }}
    >
        <Text
            style={{
                color:COLORS.white,
                ...FONTS.h2
            }}
        >{title}</Text>
    </Animated.View>
  )
};

export default AnimatedHeader;