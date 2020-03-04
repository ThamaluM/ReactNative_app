import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './components/Goalitem';
import GoalInput from './components/GoalInput';
import Counter from './components/Counter';

export default function App() {

    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = goalTitle => {
        setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
    }

    const removeGoalHandler = goalId => {
        setCourseGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>

            <Counter />

            <GoalInput onAddGoal={addGoalHandler} />

            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={
                    itemData => <GoalItem
                        id={itemData.item.id}
                        onDelete={removeGoalHandler}
                        title={itemData.item.value} />
                }
            />




        </View>
    );

}
const styles = StyleSheet.create({
    screen: {
        padding: 50
    },

});
