import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'; 

const GoalItem = props => {
    return (
        <TouchableOpacity activeOpacity={0.4} onPress={props.onDelete.bind(this,props.id)} >
            <View style={styles.listitem} >
                <Text>{props.title}</Text>
            </View>
        </ TouchableOpacity>
    );
};


export default GoalItem;

const styles = StyleSheet.create({

    listitem: {
        padding: 10,
        marginTop: 5,
        backgroundColor: '#ffff42',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4,
        justifyContent: 'center'
    }

});