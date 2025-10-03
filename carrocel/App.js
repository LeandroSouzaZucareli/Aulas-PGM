import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image } from 'react-native';

const HorizontalScroller = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
      <View style={styles.item}><Text>Item 1</Text></View>
      <View style={styles.item}><Text>Item 2</Text></View>
      <View style={styles.item}><Text>Item 3</Text></View>
      <View style={styles.item}><Text>Item 4</Text></View>
      <View style={styles.item}><Text>Item 5</Text></View>
      <View style={styles.item}><Image source ={{uri:'https://s.dicio.com.br/imagem.jpg'}} style={{width: 125, height: 125, borderRadius: 10}}></Image></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50,
  },
  item: {
    width: 150,
    height: 150,
    backgroundColor: '#49bde0ff',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    boxShadow: '0px 4px 6px #000',
  },
});

export default HorizontalScroller;