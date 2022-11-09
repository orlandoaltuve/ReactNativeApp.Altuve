import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AddItem from './Components/AddItem';
import Index from './Components/Lista/Index';
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

  const deleteItem = () => {
    setItemlist(currentState => currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:25}}> Lista de Compras</Text>
      <View>
        <AddItem
        textItem={textItem}
        onChangeItem={onChangeItem}
        addItem={addItem}
        />
        <Index
        itemList={itemList}
        selectedItem={selectedItem}
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    padding: 30,
    marginTop: 50,
    marginBottom: 90,
  },
});
