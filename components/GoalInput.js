import React ,{useState}  from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    };
   
    return (

        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Courses"
                style style={styles.input}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="Add"
                onPress={props.onAddGoal.bind(this,enteredGoal)}     
            />
        </View>
    );

};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },

});

export default GoalInput;

