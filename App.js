import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

function App() {
  let frases = [
    'A persistência é o caminho do êxito.',
    'Vá governar a sua vida',
    'A vida é uma aventura e você não vai sair dela viva',
    'Vá cuidar da sua vida',
    'Dificil é o que você não quer fazer, vá pega e faz',
    'Vá curtir a sua vida adoidado',
  ];
  const [biscoito, setBiscoito] = useState(
    require('./src/images/biscoito.png'),
  );
  const [textoFrase, setTextFrase] = useState('');

  function handleGenerate() {
    let numberAle = Math.floor(Math.random() * frases.length);
    setBiscoito(require('./src/images/biscoitoAberto.png'));
    setTextFrase(`"${frases[numberAle]}"`);
  }

  function handleReboot() {
    setTextFrase('');
    setBiscoito(require('./src/images/biscoito.png'));
  }
  return (
    <View style={styles.container}>
      <Image source={biscoito} style={styles.img} />

      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.button} onPress={handleGenerate}>
        <View style={styles.btnArea}>
          <Text style={styles.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { marginTop: 15, borderColor: '#121212' }]}
        onPress={handleReboot}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnText, { color: '#121212' }]}>
            Reiniciar Biscoito
          </Text>
        </View>
      </TouchableOpacity>
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
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#dd7b22',
  },
});

export default App;
