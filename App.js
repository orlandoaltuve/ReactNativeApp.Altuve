import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
      <TextInput  placeholder='Agregar Item a la lista' style={styles.inputItem}/>
      <Button title='Agregar'/>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    marginTop: 50,
  },
  itemContainer:{
    flexDirection:"row",
    justifyContent:'space-around',
    alignItems:"center",
  },
  inputItem:{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    
    


  }
});
