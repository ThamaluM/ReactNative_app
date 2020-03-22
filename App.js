import React, { Component, useState } from "react";
import {
  Vibration,
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from "react-native";
import GoalItem from "./components/Goalitem";
import GoalInput from "./components/GoalInput";
import Counter from "./components/Counter";
import logo from "./assets/images/bell.png";
import registerForPushNotificationsAsync from "./components/registerForPushNotificationsAsync";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isAddModeCount, setIsAddModeCount] = useState(false);
  const [count, setCount] = useState(0);

  const addGoalHandler = goalTitle => {
    if (goalTitle.length === 0) {
      return;
    }
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
    });
  };

  const closeModal = returnedCount => {
    setCount(returnedCount);
    setIsAddModeCount(false);
  };
  const closeAddModal = () => {
    setIsAddMode(false);
  };

  const notificationResolve = () => {
     registerForPushNotificationsAsync();
     
  };

  return (
    <View style={styles.screen}>
      <View style={{ alignItems: "center" }}>
        <Image source={logo} style={{ width: 30, height: 30, margin: 10 }} />
      </View>

      <View style={styles.button}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      </View>

      <View style={styles.button}>
        <Button title="Add count" onPress={() => setIsAddModeCount(true)} />
        <Text>Count : {count}</Text>
        <Text>Goal Item Count: {courseGoals.length}</Text>
      </View>
      <Button title="Push Notification" onPress={notificationResolve} />

      <Counter visible={isAddModeCount} onClose={closeModal} />

      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        closeAddModal={closeAddModal}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  button: {
    marginBottom: 10
  }
});
