import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [quantidade, setQuantidade] = useState(0)
  const [num, setNum] = useState()

  const [nome, setNome] = useState()
  const [nomes, setNomes] = useState([])
  const [sorteado, setSorteado] = useState(-1)

  function numero() {
    if (quantidade == 0 || quantidade == 1) {
      alert('Por favor informe um valor válido')
      return
    }

    setNum(Math.ceil(Math.random() * quantidade))

  }
  function adiciona() {

    const novoNome = [...nomes, nome]
    setNomes(novoNome)

  }
  function nomeSorteado() {
    console.log(nomes.length)
    if(nomes.length<=1)
    {
     alert('Insira mais nomes na lista')
     return
    }
    setSorteado(Math.floor(Math.random() * nomes.length))
  }

  return (
    <View style={styles.container}>

      <Text>Digite a quantidade de participantes:</Text>
      <TextInput placeholder='Ex: 100' keyboardType='numeric' onChangeText={setQuantidade} />

      <TouchableOpacity onPress={numero}>
        <Text> SORTEAR </Text>
      </TouchableOpacity>
      <Text>{!num ? '' : 'Parabéns! o número sorteado foi: ' + num}</Text>
      {/* <Image source={require('./img/EU.png')} /> */}
      <StatusBar style="auto" />




      <Text>Digite o nome dos participantes:</Text>
      <TextInput placeholder='Ex: joão' keyboardType='numeric' onChangeText={setNome} />
      <TouchableOpacity onPress={adiciona}>
        <Text> ADICIONAR </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={nomeSorteado}>
        <Text> SORTEAR </Text>
      </TouchableOpacity>
      <FlatList data={nomes} renderItem={({ item }) => (
        <View>
        <Text>{item}</Text>
        </View> )} 
        />
      <Text>{sorteado<0 ? '' : 'Parabéns! o número sorteado foi: ' + nomes[sorteado]}</Text>
        {console.log(nomes[sorteado])}
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
