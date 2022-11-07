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
                <View >
                    <Text>¿Quieres eliminar este elemento?</Text>
                    <Pressable
                        onPress={() => actionDeleteItem()}
                        
                    >
                        <Text>Eliminar</Text>
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
});