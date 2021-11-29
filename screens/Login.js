import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {COLORS, SIZES, images, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';
import { CustomTextButton } from '../components';

const Login = ({navigation}) => {

  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          source={images.loginBackground}
          resizeMode="cover"
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.largeTitle,
                width: '70%',
                lineHeight : 45
              }}>
              Cooking a Delevous Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const renderDetails = ()=>{
      return(
        <View 
            style={{
                flex : 1,
                paddingHorizontal : SIZES.padding + 5,
                marginTop : SIZES.padding
            }}
        >
            {/* header */}
            <Text
                style={{
                    color : COLORS.lightGray2,
                    width : "70%",
                    ...FONTS.body3
                }}
            >
                Discover more than 1200 food
                 recipes in your hands
                and cooking it easily !
            </Text>
            {/* Login */}
            <CustomTextButton colors={[COLORS.darkGreen , COLORS.lime]} title="login"
                onPress={()=>navigation.replace('Home')}
                customButtonStyle={{
                    paddingVertical :20,
                    marginTop : SIZES.padding,
                    borderRadius : 20,

                }}
            />
            {/* sign up */}
            <CustomTextButton colors={[]} title="sign up"
                onPress={()=>navigation.replace('Home')}
                customButtonStyle={{
                    paddingVertical :18,
                    marginTop : SIZES.padding,
                    borderRadius : 20,
                    borderColor : COLORS.darkLime,
                    borderWidth : 1
                }}
            />

        </View>
      )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
      }}>
      <StatusBar barStyle="light-content" />
      {/* header */}
      {renderHeader()}

      {/* details */}
      {renderDetails()}
    </View>
  );
};

export default Login;
