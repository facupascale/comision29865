import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const CategoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>BreadDetailScreen</Text>
            <Button title='Go to detail' onPress={() => {navigation.navigate('Detail')}} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})