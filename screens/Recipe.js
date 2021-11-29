import React ,{useState , useEffect} from 'react';
import {
    View,
    Text
} from 'react-native';

const Recipe = ({route , navigation}) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null)

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
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Text>Recipe {selectedRecipe.name}</Text>
        </View>
    )
}

export default Recipe;