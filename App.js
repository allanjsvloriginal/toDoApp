import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleClearAllTask = (index) => {
    setTasks([]);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity
        // onPress={() => handleEditTask(index)}
        >
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        placeholderTextColor="#a3a19d"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.clearAllButton}
        onPress={handleClearAllTask}
      >
        <Text style={{ color: "white" }}>Clear All Tasks</Text>
      </TouchableOpacity>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "yellow",
  },
  input: {
    color: "white",
    borderWidth: 3,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    width: "80%",
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  clearAllButton: {
    backgroundColor: "red",
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
  task: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
  },
  taskButtons: {
    flexDirection: "row",
  },
  itemList: {
    color: "white",
    fontSize: 19,
  },
  editButton: {
    marginRight: 10,
    color: "green",
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});
