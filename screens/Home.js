import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { COLORS, dummyData } from '../constants';
import { CategoriCard } from '../components';

const Home = ({navigation}) => {
  return(
    <SafeAreaView style={{flex :1 , backgroundColor:COLORS.white}}>
        <FlatList
            data={dummyData.categories}
            keyExtractor={item=>`${item.id}`}
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><CategoriCard
                categoriItem={item}
                containerCustomStyle={{}}
                onPress={()=>navigation.navigate('Recipe' , {recipe : item})}
                />}
            ListHeaderComponent={()=>{
                return(<View></View>)
            }}
            ListFooterComponent={()=>{
                return(<View style={{marginBottom:80}}></View>)
            }}
        />
    </SafeAreaView>
  ) 
};

export default Home;
