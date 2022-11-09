import { StyleSheet, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const ListaItem = ({item,selectedItem}) => {
  return (
    <TouchableOpacity
    onPress={() => selectedItem(item.id)}
    style={styles.items}
  >
    <Text>{item.value}</Text>
  </TouchableOpacity>
  )
}

export default ListaItem

const styles = StyleSheet.create({
    items: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
      }
})