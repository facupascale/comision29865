import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const BreadDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text>BreadDetailScreen</Text>
            <Button title='Go to Category' onPress={() => {navigation.navigate('Bread', { title: 'Parametros'})}} />
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