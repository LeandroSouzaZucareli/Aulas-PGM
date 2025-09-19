import React from "react";
import { View, StyleSheet } from "react-native";
import { Card, Text, IconButton } from "react-native-paper";

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <Card style={styles.card}>

      <Card.Content>
        <Text style={styles.title}>Título: {task.title}</Text>
        <Text>Descrição: {task.description}</Text>
        <Text>Prazo: {task.deadline}</Text>
        <Text>Status: {task.status}</Text>
      </Card.Content>

      <View style={styles.actions}>
        <IconButton
          icon="pencil"
          size={22}
          iconColor="#FFF"
          onPress={onEdit}
          style={styles.editBtn}
        />
        <IconButton
          icon="delete"
          size={22}
          iconColor="#FFF"
          onPress={onDelete}
          style={styles.deleteBtn}
        />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor:"#65a9e1ff",
    marginVertical: 6,
    marginHorizontal: 12
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 2,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    padding: 10,

  },
  editBtn: {
    backgroundColor: "#4207b7ff",
  },
  deleteBtn: {
    backgroundColor: "#00bfffff",
  },
});
