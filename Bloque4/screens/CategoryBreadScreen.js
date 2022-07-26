import React from 'react'
import { FlatList} from 'react-native'
import { BREADS } from '../data/breads'
import BreadItem from '../components/BreadItem'

export const CategoryBreadScreen = ({navigation, route}) => {
    
    const Breads = BREADS.filter(bread => bread.category === route.params.categoryID)

    const handleSelected = (item) => {
        navigation.navigate('Detail', {
            bread: item
        })
    }

    const renderItemBread = ({ item }) => (
        <BreadItem item={item} onSelected={handleSelected} />
    )

    return (
        <FlatList
            data={Breads}
            renderItem={renderItemBread}
            keyExtractor={item => item.id}
        />
    )
}
