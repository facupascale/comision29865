import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import {CategoriesScreen} from '../screens/CategoriesScreen'
import {CategoryBreadScreen} from '../screens/CategoryBreadScreen'
import {BreadDetailScreen} from '../screens/BreadDetailScreen'

const Stack = createNativeStackNavigator()

const Logo = () => {
    return (
        <Image source={require('../assets/icon.png')} style={{width: 50, height: 50}}/>
    )
}


const ShopNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: '#f4511e'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
                <Stack.Screen name='Home' component={CategoriesScreen} options={{ headerShown: false ,headerTitle: (props) => <Logo {...props} /> }}/>
                <Stack.Screen name='Bread' component={CategoryBreadScreen} options={({route}) => ({ headerTitle: route.params.title})}/>
                <Stack.Screen name='Detail' component={BreadDetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default ShopNavigator;