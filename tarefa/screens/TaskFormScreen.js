import React, { useState } from "react";
import { View, StyleSheet, Button, Text, TextInput, Image } from "react-native";
import { RadioButton } from 'react-native-paper';
import uuid from "react-native-uuid";

export default function TaskFormScreen({ route, navigation }) {
  const { task, setTasks } = route.params || {};
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [deadline, setDeadline] = useState(task ? task.deadline : "");
  const [status, setStatus] = useState(task ? task.status : "Pendente");

  const handleSave = () => {
    if (task) {
      setTasks((prev) =>
        prev.map((t) => (t.id === task.id ? { ...t, title, description, deadline, status } : t))
      );
    } else {
      setTasks((prev) => [
        ...prev,
        { id: uuid.v4(), title, description, deadline, status },
      ]);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       <TextInput
        placeholder="Título da Tarefa"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.textArea}
        multiline={true} // Permite múltiplas linhas
        numberOfLines={4}

      />
      <TextInput
        value={deadline}
        onChangeText={setDeadline}
        style={styles.input}
        placeholder="Prazo: DD/MM/AAAA"
      />
      <View style={styles.radio}>
        <Text style={styles.label}>Status</Text>
        <RadioButton.Group onValueChange={(value) => setStatus(value)} value={status}>
          <View style={styles.radioGroup}>
            <RadioButton.Item value="Pendente" />
            <Text>Pendente</Text>
            <RadioButton.Item value="Concluída" />
            <Text>Concluída</Text>
          </View>
        </RadioButton.Group>

      </View>


      <Button
        title="Salvar"
        onPress={handleSave}
        style={styles.button}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2563b0ff"
  },
  input: {
    backgroundColor:"#fff",
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10
  },
  radio: {
    backgroundColor:"#fff",
    height: 80,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10
  },
  textArea: {
    backgroundColor:"#fff",
    height: 100, // Altura do TextArea
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    textAlignVertical: 'top', // Alinha o texto ao topo
  },
  label: {
    marginTop: 5,
    fontWeight: "bold"
  },
  radioGroup: { flexDirection: "row", alignItems: "center", marginBottom: 16 },
  button: {
    marginTop: 20,
    backgroundColor: "#7B61FF",
    padding: 20
  },
  logo: {
    width: 80,
    height: 80,
  }
});

