import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ColorPropType, Modal } from 'react-native';

const Counter = props => {
    const [count, setCount] = useState(0);

    const resetCounter = () => {
        setCount(0);
    };
    const addCounter =()=>{
        props.onClose(count);
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>

                <View style={styles.counterbutton}>
                    <Button title=" - " onPress={() => {
                        if (count > 0) {
                            setCount(count - 1)
                        }
                    }} color="red" />
                </View>

                <View style={styles.counter} >
                    <Text>{count}</Text>
                </View>

                <View style={styles.counterbutton}>
                    <Button title=" + " onPress={() => setCount(count + 1)} color="green" />

                </View>

            </View>
            <View style={styles.button}>
                <Button title="Reset" onPress={resetCounter} />

            </View>
            <View style={styles.button}>
                <Button title="Set" onPress={props.onClose.bind(this,count)} />
            </View>
        </Modal>


    );

};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    counter: {
        backgroundColor: '#ddd',
        textAlign:'center',
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:8,
        paddingTop:8,
    },
    counterbutton: {
        width: 40,
        margin: 10
    },
    button: {
        marginHorizontal:60,
        marginVertical:5,
        borderRadius:5
    }

});


export default Counter;

