import React, { useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import TaskCard from "../components/TaskCard";

export default function TaskListScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar",
      description: "Para prova de PGM",
      deadline: "05/09/2025",
      status: "Concluída",
    },
    {
      id: "2",
      title: "Trabalho",
      description: "Finalizar relatório",
      deadline: "10/09/2025",
      status: "Pendente",
    },
  ]);

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    navigation.navigate("TaskForm", { task, setTasks });
  };

  const handleAdd = () => {
    navigation.navigate("TaskForm", { setTasks });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            onEdit={() => handleEdit(item)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
      />


      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.label}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#03b9daff" },
  button: {
    position: "absolute",
    margin: 16,
    right: 16,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#5a44c7ff",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 30
  }
});
