import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);    
            setEnteredGoal('') ; 
    }
    return (
        <Modal visible={props.visible} animationType="slide">

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Courses"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />

                <View style={styles.horizontalRow}>
                    <View style={{marginHorizontal:1,width:"40%"}}>
                    <Button title="Add" color="#ded401" onPress={addGoalHandler} />
                    </View>
                    <View style={{marginHorizontal:1,width:"40%"}}>
                    <Button title="CANCEL" color="red" onPress={props.closeAddModal} />
                    </View>
                </View>
            </View>


        </Modal>

    );

};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        backgroundColor: "#ddd"
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    horizontalRow: {
        flexDirection: "row",
    }

});

export default GoalInput;

