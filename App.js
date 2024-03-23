import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        // value={task}
        // onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity
        style={styles.addButton}
        // onPress={handleAddTask}
      >
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    width: 300,
    textAlign: "center",
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: { 
    color: "white", 
    fontWeight: "bold", 
    textAlign: "center", 
    fontSize: 18, 
}, 
});
