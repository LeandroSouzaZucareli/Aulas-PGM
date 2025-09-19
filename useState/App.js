import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [pontos, setPontos] = useState(0);

  function incrementar() {
    if (pontos < 12) {
      setPontos(pontos + 1)
    }else{
      setPontos(0)
      alert("Já atingiu 12 pontos!")
    }
    
  }

  function decrementar() {
    if (pontos > 0) {
      setPontos(pontos - 1)
    }
  }

  return (
    <View style={styles.containerTimeA}>

      <View style={styles.button}>
        <Button color={"red"} title="-1" onPress={decrementar}></Button>
      </View>
      <View style={styles.value}>
        <Text style={styles.result}>{pontos}</Text>
      </View>
      <View style={styles.button}>
        <Button title="+ 1" onPress={incrementar}></Button>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerTimeA: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    },
  value: {
    margin:10,
    alignItems: "center"

  },
  button: {
    width: 60,
  },
  result: {
    fontSize: 28,
  }
});
