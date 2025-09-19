import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';

export default function App() {
  const [numeroA, setNumeroA] = useState('');
  const [numeroB, setNumeroB] = useState('');
  const [numeroC, setNumeroC] = useState('');
  const [resultado, setResultado] = useState('');

  const calcularRaizes = () => {
    const coeficienteA = parseFloat(A);
    const coeficienteB = parseFloat(B);
    const coeficienteC = parseFloat(C);
    
    if (coeficienteA === 0) {
      Alert.alert('Erro', 'O coeficiente "a" não pode ser zero em uma equação de segundo grau.');
      return;
    }

    const delta = (coeficienteB * coeficienteB) - 4 * coeficienteA * coeficienteC;

    if (delta < 0) {
      setResultado('Não existem raízes reais.');
    } else if (delta === 0) {
      const x = -coeficienteB / (2 * coeficienteA);
      setResultado(`Existe uma raiz real: x = ${x.toFixed(2)}`);
    } else {
      const x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA);
      const x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA);
      setResultado(`Duas raizes reais: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>coeficiente 1</Text>
      <TextInput
        style={style.input}
        value='numeroA'
        onChange={numeroA}
        placeholder='Digite o primeiro valor'
      />

      <Text style={styles.label}>coeficiente 2</Text>
      <TextInput
        style={style.input}
        value='numeroB'
        onChange={numeroB}
        placeholder='Digite o primeiro valor'
      />

      <Text style={styles.label}>coeficiente 3</Text>
      <TextInput
        style={style.input}
        value='numeroC'
        onChange={numeroC}
        placeholder='Digite o primeiro valor'
      />
    </View>
  )
}