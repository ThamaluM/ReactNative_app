import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ColorPropType } from 'react-native';

const Counter = props => {
    const [count, setCount] = useState(0);
    return (

        <View style={styles.inputContainer}>
            <Button title=" + " onPress={() => setCount(count + 1)} />

            <View style={styles.counter} >
                <Text>   {count}   </Text>
            </View>
            <Button title=" - " onPress={() => setCount(count - 1)} />

        </View>

    );

};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    counter: {
        backgroundColor: '#ddd',
        height: 35,
        paddingTop: 8
    }
});


export default Counter;

