import React, { useState } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function App() {
  const [biscoito, setBiscoito] = useState(
    require('./src/images/biscoito.png'),
  );
  return (
    <View style={styles.container}>
      <Image source={biscoito} style={styles.img} />

      <Text>" Esta é minha primeira frase do biscoito "</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 230,
    height: 230,
  },
});

export default App;
