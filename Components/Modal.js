import { StyleSheet, Pressable, Text, View, Modal as NewModal, } from 'react-native';
import React from 'react';

const Modal = (props) => {
    
    const {isVisible, actionDeleteItem, closeModal} = props;

    return(
        <NewModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modal}>
                    <Pressable style={styles.close} onPress={()=> closeModal()}>
                        <Text style={{fontSize:30, color:'red'}}>x</Text>
                    </Pressable>
                    <Text>¿Quieres eliminar este elemento?</Text>
                    <Pressable
                        onPress={() => actionDeleteItem()}
                        
                    >
                        <Text style={{color:'red', padding:20}}>Eliminar</Text>
                    </Pressable>
                </View>
            </View>

        </NewModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
    modal:{
        width:300,
        height:150,
        backgroundColor:'#F4F4F6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    },
    close:{
        alignSelf:'flex-end',
      
        marginBottom:10,
        marginRight: 20,
        flexDirection:'row',
        color:'red',
        justifyContent:'flex-end',
        
        
        
    }
});