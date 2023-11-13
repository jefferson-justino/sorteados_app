import { StyleSheet, Text, View, TextInput, Modal, ImageBackground } from 'react-native';
import { useState } from 'react';
import DefaultButton from '../component/DefaultButton';
import sorteioNumero from '../classes/sorteioNumero';//importa as classes

export default function ScreenNumber() {
  const [quantidade, setQuantidade] = useState(0) // armazena a quantidade de participantes
  const [num, setNum] = useState(0) // armazena o número sorteado
  const [titulo, setTitulo] = useState('')


  function numero() {
    if (quantidade == 0 || quantidade == 1) {
      alert('Por favor informe um valor válido')
      return
    }

    setNum(Math.ceil(Math.random() * quantidade))

  }

  function excluir() {
    setNum(0)
    setTitulo('')
  }



  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/fundo.png')}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center' }}
      >

        <View style={styles.center}>
          <Text style={styles.text}>Quantidade de participantes:</Text>
        </View>

        <View style={styles.center}>
          <View style={styles.amount}>
            <TextInput
              placeholder="Ex.: 20"
              selectionColor="#000000"
              placeholderTextColor="#B6B6B6"
              keyboardType='numeric'
              onChangeText={setQuantidade}
            />
          </View>
        </View>

        <View style={styles.center}>
          <DefaultButton
            buttonText={'SORTEAR'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            click={numero}
            width={200}
            height={50}
            marginBottom={20}
          />
        </View>

        <View style={styles.center}>
          <Text style={styles.text}>{!num ? '' : 'O NúMERO SORTEADOR FOI:'}</Text>
        </View>

        <View style={styles.center}>
          <Text style={styles.result}>{!num ? '' : num}</Text>
        </View>




        <View style={styles.center}>
          <DefaultButton
            buttonText={'EXCLUIR'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            click={excluir}
            width={140}
            height={50}
            marginBottom={20}
          />
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centralModal: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  tamModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 15,
    color: "#fff",
  },
  amount: {
    width: "15%",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#fff",
    padding: 5,
    marginBottom: 20,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    fontStyle: "italic"
  },
  center: {
    alignItems: "center",
  },
  modalInput: {
    width: "15%",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "gray",
    padding: 5,
    marginBottom: 20,
  },
});
