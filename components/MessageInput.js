import React, { useState } from "react";
import { View, Modal, TextInput, StyleSheet, Button } from "react-native";

const MessageInput = props => {
  const [message, setMessage] = useState("");

  const messageInputHandler = message => {
    setMessage(message);
  };

  const addMessageHandler = () => {
      if(message ===null){
          return ;
      }
    props.onAddMessage(message);
    setMessage("");
  };

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="notification message"
          style={styles.input}
          onChangeText={messageInputHandler}
          value={message}
        />

        <View style={styles.horizontalRow}>
          <View style={{ marginHorizontal: 1, width: "40%" }}>
            <Button title="SEND MESSAGE" color="#ded401" onPress={addMessageHandler} />
          </View>
          <View style={{ marginHorizontal: 1, width: "40%" }}>
            <Button title="CANCEL" color="red" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff"
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  horizontalRow: {
    flexDirection: "row"
  }
});

export default MessageInput;
