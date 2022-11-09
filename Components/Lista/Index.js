import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ListaItem from './ListaItem'


const Index = ({itemList,selectedItem}) => {
  return (
    <FlatList
    data={itemList}
    renderItem={ data=>(<ListaItem item={data.item} selectedItem={selectedItem}/>)}
    keyExtractor={(item) => item.id}
  />

  )
}

export default Index

const styles = StyleSheet.create({})