import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Image,
  TextInput
} from 'react-native';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../constants';
import { CategoriCard, TrendingCard } from '../components';

const Home = ({navigation}) => {

  const renderHeader = ()=>{
    return(
      <View style={{flex:1 , marginVertical : 10
        ,flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginHorizontal : SIZES.padding
      }}>
          <View>
            <Text
              style={{
                ...FONTS.h2,
                color : COLORS.darkGreen
              }}
            >Hello Sadegh ,</Text>
            <Text
              style={{
                color:COLORS.gray,
                ...FONTS.body3,
                marginTop : 5
              }}
            >what to want to cook tody ?!</Text>
          </View>
            <TouchableOpacity>
              <Image  
                  source={images.sadegh}
                  resizeMode="cover"
                  style={{
                    width :50,
                    height : 50,
                    borderRadius : 80,
                  }}
              />
            </TouchableOpacity>
      </View>
    )
  }

  const renderSearchbar = ()=>{
    return(
      <View
        style={{
          backgroundColor:COLORS.gray2,
          flexDirection:'row',
          alignItems:'center',
          borderRadius : SIZES.radius,
          marginHorizontal : SIZES.base,
          paddingHorizontal : SIZES.radius,
          height : 55,
          marginVertical : SIZES.base,
          
        }}
      >
        <Image
          source={icons.search}
          style={{
            width : 20,
            height : 20,
            tintColor  : COLORS.gray,
            
          }}
        />
        <TextInput
          placeholderTextColor={COLORS.gray}
          placeholder="search recipes"
          style={{
            ...FONTS.body3,
            marginLeft : SIZES.radius
          }}
        />
      </View>
    )
  }

  const renderSeeRecipe = ()=>{
    return(
      <View
        style={{
          flexDirection:'row',
          marginHorizontal : SIZES.base,
          backgroundColor : COLORS.lightGreen,
          paddingVertical : SIZES.base,
          borderRadius:SIZES.radius
        }}
      >
          <View>
            <Image
              source={images.recipe}
              resizeMode="cover"
              style={{
                width : 80,
                height : 80
              }}
            />
          </View>
          <View style={{flex : 1 , paddingLeft : 20}}>
            <Text
              style={{
                ...FONTS.body4,
                width : '60%',
                color :COLORS.black
              }}
            >you have 12 recipes that you havent tried yet</Text>
            <TouchableOpacity>
              <Text
                style={{
                  textDecorationLine:'underline',
                  ...FONTS.h4,
                  color : COLORS.darkGreen
                }}
              >see recipe</Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }

  const trendingSection = ()=>{
    return(
      <View style={{
        marginHorizontal : SIZES.base,
        marginVertical : SIZES.padding
      }}>
        <Text
          style={{
            ...FONTS.h2,
            color:COLORS.black
          }}
        >Trending Recipe</Text>
        <FlatList
          data={dummyData.trendingRecipes}
          keyExtractor={item=>`${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item,index})=>(
            <TrendingCard
              trendingItem={item}
              onPress={()=>console.log(item)}
              customStyle={{}}
            />
          )}
        />
      </View>
    )
  }

  return(
    <SafeAreaView style={{flex :1 , backgroundColor:COLORS.white}}>
        <FlatList
            data={dummyData.categories}
            keyExtractor={item=>`${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><CategoriCard
                categoriItem={item}
                containerCustomStyle={{borderRadius : SIZES.radius}}
                onPress={()=>navigation.navigate('Recipe' , {recipe : item})}
                />}
            ListHeaderComponent={
              <View>
                {/* header */}
                {renderHeader()}
                {/* search bar */}
                {renderSearchbar()}
                {/* see recipe card */}
                {renderSeeRecipe()}
                {/* trending section */}
                {trendingSection()}
                {/* categori header */}
              </View>
            }
            ListFooterComponent={()=>{
                return(<View style={{marginBottom:80}}></View>)
            }}
        />
    </SafeAreaView>
  ) 
};

export default Home;
