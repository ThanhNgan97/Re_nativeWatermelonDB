import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

const HomeScreen = () => {
  return (
    <View>
        <Redirect href={'/allocations'}/>
    </View>
  )
}

export default HomeScreen