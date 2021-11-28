import React , {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'


const App = () => {

  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View>
      <Text>Food App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
