import { StyleSheet, Text, View, TextInput,FlatList } from 'react-native';

import DefaultButton from '../component/DefaultButton';
import { useState } from 'react';

export default function ScreenName() { 
  const [nome, setNome] = useState() //useState para pegar cada nome que é escrito no input
  const [nomes, setNomes] = useState([]) // state para armazenar os nomes em um array
  const [sorteado, setSorteado] = useState(-1) // state para armazenar o número que foi sorteado, começa negativo para não dar confitos com o operador ternário
  function nomeSorteado() {
 
    if(nomes.length<=1)
    {
     alert('Insira mais nomes na lista')
     return
    }
    setSorteado(Math.floor(Math.random() * nomes.length)) // realiza o sorteio limitando a quantidade de nomes na lista
  }

  function adiciona() {

    const novoNome = [...nomes, nome] // adiciona dentro de um array a lista de nomes que já existia mais um novo nome(utilizado método spread)
    setNomes(novoNome)
    this.textInput.clear() //comando para limpar o input sempre que um novo nome for adicionado

  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>Digite o nome dos participantes:</Text>
      </View>

      <View style={styles.amount}>
        <TextInput
          placeholder="Ex: João da Silva"
          selectionColor="#000000"
          placeholderTextColor="#B6B6B6"
          onChangeText={setNome} 
          ref={input => { this.textInput = input }} //através do 'ref' é indicado que este é o input a ser limpo ao adicionar um novo nome
      
        />
      </View>

      <DefaultButton
        buttonText={'ADICIONAR'}
        backgroundColor={'#03575C'}
        marginTop={14}
        click={adiciona}
        width={200}
        height={50}
        marginBottom={2}
      />

      <DefaultButton
        buttonText={'SORTEAR'}
        backgroundColor={'#03575C'}
        marginTop={14}
        click={nomeSorteado}
        width={200}
        height={50}
        marginBottom={20}
      />

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20, paddingTop: 30}}>{sorteado<0 ? 'O RESULTADO' : 'PARABÉNS'}</Text>
      </View>

      <View>
        <Text style={styles.result}>{sorteado<0 ? 'SERÁ' :  nomes[sorteado]}</Text>
      </View>

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20, paddingBottom: 40}}>{sorteado<0 ? 'MOSTRADO AQUI' : 'VOCÊ FOI SORTEADO!'}</Text>
      </View>

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20,}}>QUANTIDADE DE PARTICIPANTES:</Text>
      </View>

      <View>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>{nomes.length}</Text>
      </View>


      <FlatList data={nomes} renderItem={({ item }) => (
        <View>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>{item}</Text>
        </View> )} 
        />


      <DefaultButton
        buttonText={'SALVAR RESULTADO'}
        backgroundColor={'#03575C'}
        marginTop={14}
        // click={}
        width={200}
        height={50}
        marginBottom={20}
      />
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
  text:{
    fontSize: 20,
    fontWeight: "bold", 
    padding: 15,
    color: "#03575C",
  },
  amount:{
    width: "70%",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginBottom: 10
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    fontStyle: "italic"
  }
});
