import React ,{useState , useEffect , useRef} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    Animated,
    Image
} from 'react-native';
import { COLORS , FONTS , icons, SIZES } from '../constants';

const HEADER_HEIGHT = 350;

const Recipe = ({route , navigation}) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null)
    const scrollY = useRef(new Animated.Value(0)).current;
    useEffect(()=>{
        setSelectedRecipe(route.params.recipe)
    },[])
    if(selectedRecipe === null){
        return null
    }
    
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white
            }}
        >
            <Animated.FlatList
                data={selectedRecipe?.ingredients}
                keyExtractor={item =>`${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {/* header */}
                        {/* info */}
                        {/* title */}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    {nativeEvent : {contentOffset : {y:scrollY}}}
                ] , {useNativeDriver : true})}
                renderItem={({item , index})=>{
                    return(
                        <View 
                            style={{
                                flexDirection:'row',
                                paddingHorizontal:SIZES.base,
                                alignItems:'center',
                                marginVertical:SIZES.base,
                                paddingHorizontal:SIZES.padding
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor:COLORS.lightGray,
                                    borderRadius:50,
                                    padding : SIZES.base,
                                    justifyContent:'center',
                                    alignItems:'center'
                                }}
                            >
                                <Image
                                    source={item.icon}
                                    style={{
                                        width :30,
                                        height : 30
                                    }}
                                />
                            </View>
                            <View>
                                <Text
                                    style={{
                                        color:COLORS.black,
                                        ...FONTS.body3,
                                        marginLeft : 10
                                    }}
                                >{item.description}</Text>
                            </View>
                            <View
                                style={{
                                    flex:1,
                                    alignItems:'flex-end',
                                    justifyContent:'center'
                                }}
                            >
                                <Text 
                                    style={{
                                        color:COLORS.black,
                                        ...FONTS.body5
                                    }}
                                >{item.quantity}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

export default Recipe;