import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Modal from './Components/Modal';

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [itemList, setItemlist] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const selectedItem = (id) => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(true)
  }

  const onChangeItem = (t) => {
    setTextItem(t)
  }
  const addItem = () => {
    setItemlist(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem }
    ])
    setTextItem("")
  }


  const renderItem = ({ item }) => (

    <TouchableOpacity
      onPress={() => selectedItem(item.id)}
      style={styles.items}
    >
      <Text>{item.value}</Text>
    </TouchableOpacity>
  )

  const deleteItem = () => {
    setItemlist(currentState => currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
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
      <View>
        <FlatList
          data={itemList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    marginTop: 50,
    marginBottom: 90,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: "center",
  },
  inputItem: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
  items: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
