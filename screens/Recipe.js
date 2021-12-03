import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Animated,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {AnimatedHeader , Viewers} from '../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const HEADER_HEIGHT = 350;

const Recipe = ({route, navigation}) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const offset = useRef(new Animated.Value(0)).current;
  const scrollY = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setSelectedRecipe(route.params.recipe);
  }, []);
  if (selectedRecipe === null) {
    return null;
  }

  const renderRecipeHeader = () => {
    return (
      <SafeAreaView forceInset={{top: 'always'}}>
        <AnimatedHeader animatedValue={offset} title={selectedRecipe?.name} />
        <Image
          source={selectedRecipe?.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: HEADER_HEIGHT,
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 7,
            left: 10,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            padding: 10,
            borderRadius: SIZES.radius,
            zIndex: 11,
            backgroundColor:COLORS.transparentBlack5

          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
                alignItems:'center',
                justifyContent:'center'
            }}
            >
            <Image
              source={icons.back}
              resizeMode="cover"
              style={{
                width: 13,
                height: 13,
                tintColor: COLORS.lightGray,
              }}
            />
          </TouchableOpacity>
        </View>
       {/* bookmark */}
        <View
          style={{
            position: 'absolute',
            top: 13,
            right: 10,
            zIndex: 11,
            
          }}>
          <TouchableOpacity
            onPress={() => console.log(selectedRecipe.isBookmark)}
            style={{flex: 1}}>
            <Image
              source={
                selectedRecipe?.isBookmark
                  ? icons.bookmarkFilled
                  : icons.bookmark
              }
              resizeMode="contain"
              style={{
                width: 26,
                height: 26,
                tintColor: COLORS.darkGreen,
              }}
            />
          </TouchableOpacity>
        </View>

        {/* info */}
        <Animated.View
          style={{
            position: 'absolute',
            bottom: 20,
            right: 30,
            left: 30,
            zIndex: 15,
            backgroundColor: COLORS.transparentGray,
            flexDirection: 'row',
            borderRadius: SIZES.radius,
            paddingHorizontal: SIZES.base,
            paddingVertical: SIZES.base,
            alignItems: 'center',
          
          }}>
          <View>
            <Image
              source={selectedRecipe?.author?.profilePic}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                borderRadius: 30,
              }}
            />
          </View>
          <View style={{flex: 1, paddingHorizontal: SIZES.base + 5}}>
            <Text
              style={{
                color: COLORS.gray,
                ...FONTS.body4,
              }}>
              Recipe by
            </Text>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.body3,
              }}>
              {selectedRecipe?.author?.name}
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.lightGray,
              borderRadius: SIZES.radius,
              alignItems: 'flex-end',
              backgroundColor:COLORS.transparentBlack5

            }}>
            <TouchableOpacity
              // onPress={()=>navigation.goBack()}
              style={{
                padding: SIZES.base - 2,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Animated.Image
                source={icons.rightArrow}
                resizeMode="cover"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: COLORS.lightGray,
                }}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </SafeAreaView>
    );
  };

  const renderInfo = ()=>{
      return(
          <View
            style={{
                flexDirection:'row',
                paddingHorizontal : SIZES.padding,
                paddingVertical:SIZES.padding,
                alignItems:'flex-start',
                justifyContent:'center'
            }}
          >
              {/* title */}
              <View style={{flex : 1.5 }}>
                  <Text
                    style={{
                        color:COLORS.black,
                        ...FONTS.h2,
                        width : "70%"
                    }}
                  >{selectedRecipe?.name}</Text>
                  <Text
                    style={{
                        color:COLORS.lightGray2,
                        marginTop : 20,
                        
                    }}
                  >{selectedRecipe?.duration} | {selectedRecipe?.serving} Serving</Text>
              </View>
              {/* viewers */}
              <View style={{flex:1 ,alignItems:'center'}}>
                    <Viewers
                        viewersList={selectedRecipe?.viewers}
                    />
              </View>
          </View>
      )
  }

  const renderIngredientsTitle = ()=>{
    return(
      <View 
        style={{
          paddingHorizontal:SIZES.padding,
          flexDirection:'row',
          alignItems:'center',
          marginBottom : 10
        }}
      >
        <Text
          style={{
            ...FONTS.h2,
            color :COLORS.black,
            flex:1
          }}
        >ingredients</Text>
        <TouchableOpacity>
        <Text
          style={{
            color:COLORS.gray
          }}
        >{selectedRecipe?.ingredients?.length} items</Text>
        </TouchableOpacity>
        
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* header */}
            {renderRecipeHeader()}
            {/* info */}
            {renderInfo()}
            {/* title */}
            {renderIngredientsTitle()}
          </View>
        }
        scrollEventThrottle={16}
        // onScroll={Animated.event([
        //     {nativeEvent : {contentOffset : {y:scrollY}}}
        // ] , {useNativeDriver : true})}
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{
                height: 1,
                backgroundColor: COLORS.lightGray,
                marginHorizontal: SIZES.base,
              }}></View>
          );
        }}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: SIZES.base,
                alignItems: 'center',
                marginVertical: SIZES.base,
                paddingHorizontal: SIZES.padding,
              }}>
              <View
                style={{
                  backgroundColor: COLORS.lightGray,
                  borderRadius: 50,
                  padding: SIZES.base,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={item.icon}
                  style={{
                    width: 30,
                    height: 30,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    color: COLORS.black,
                    ...FONTS.body3,
                    marginLeft: 10,
                  }}>
                  {item.description}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: COLORS.black,
                    ...FONTS.body5,
                  }}>
                  {item.quantity}
                </Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Recipe;
