import { StyleSheet, View, TextInput, Button } from 'react-native'
import React from 'react'

const AddItem = ({textItem,onChangeItem,addItem}) => {
    return (
        <View style={styles.itemContainer}>
            <TextInput
                value={textItem}
                placeholder='Agregar Item a la lista'
                style={styles.inputItem}
                onChangeText={onChangeItem}
            />
            <Button
                title='Agregar'
                onPress={addItem} 
            />
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    itemContainer: {
        width: 400,
        marginTop:30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      },
      inputItem: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 160,
      },
})