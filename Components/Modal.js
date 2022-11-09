import { StyleSheet, Pressable, Text, View, Modal as NewModal, } from 'react-native';
import React from 'react';

const Modal = (props) => {
    
    const {isVisible, actionDeleteItem} = props;
    return(
        <NewModal
            animationType='fade'
            transparent={true}
            visible={isVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modal}>
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
        height:100,
        backgroundColor:'#F4F4F6',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20
    }
});