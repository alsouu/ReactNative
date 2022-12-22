import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  TextInput,
  StyleSheet,
  StatusBar,
} from "react-native";
import { CheckBox } from "@rneui/themed";
import { observer } from "mobx-react-lite";
import uuid from "react-native-uuid";
import TodoStore from "./Store/Todo";
import { SafeAreaProvider } from "react-native-safe-area-context";


const App = observer(() => {
  const [text, setText] = useState("");

  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <ScrollView>
        {TodoStore.todos.map(({ id, title, completed }) => (
          <View style={styles.todosList} key={id}>
            <CheckBox
              checked={completed}
              onPress={() => TodoStore.completeTodo(id)}
            />
            <Text>{title}</Text>
            <Button title="Delete" onPress={() => TodoStore.deleteTodo(id)} />
          </View>
        ))}
        <TextInput
          style={{ height: 40 }}
          placeholder="NewTodo"
          onChangeText={(t) => setText(t)}
          defaultValue={text}
        />
        <Button
          title="Add Todo"
          onPress={() => TodoStore.createTodo({ id: uuid.v4(), title: text })}
        />
      </ScrollView>
    </SafeAreaProvider>
  );
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
  todosList: {
    flexDirection: "row",
    width: 350,
    justifyContent: "space-between",
    alignItems: "center",

  },
});