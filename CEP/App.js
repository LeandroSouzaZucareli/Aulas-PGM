import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [cep, setCep] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const buscarCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        setError('CEP não encontrado');
        setData(null);
      } else {
        setData(response.data);
        setError('');
      }
    } catch (err) {
      setError('Erro ao buscar CEP');
      setData(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
      />
      <Button title="Buscar" onPress={buscarCep} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {data && (
        <View style={styles.result}>
          <Text>Logradouro: {data.logradouro}</Text>
          <Text>Bairro: {data.bairro}</Text>
          <Text>Cidade: {data.localidade}</Text>
          <Text>Estado: {data.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 24, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  error: { color: 'red', marginTop: 10 },
  result: { marginTop: 20 },
});
