import React from 'react';
import { View, StyleSheet } from 'react-native';
const Cartao = (props) => {
    return (
            <View style={{...estilos.cartao,...props.estilos}}>{props.children}</View>
        );
};
const estilos = StyleSheet.create({
    cartao: {
        shadowColor: 'black',
        
        shadowRadius: 6,
        shadowOpacity: 0.32,
        backgroundColor: 'white',
        elevation: 4,
        padding: 2,
        borderRadius: 10,
        margin: 5
        }
});
export default Cartao;