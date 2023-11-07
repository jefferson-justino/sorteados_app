import { StyleSheet, Text, View, TextInput, FlatList, Modal, ImageBackground } from 'react-native';

import DefaultButton from '../component/DefaultButton';
import { useState } from 'react';
import sorteioNome from '../classes/sorteioNome';

export default function ScreenName() {
  const [nome, setNome] = useState() //useState para pegar cada nome que é escrito no input
  const [nomes, setNomes] = useState([]) // state para armazenar os nomes em um array
  const [sorteado, setSorteado] = useState(-1) // state para armazenar o número que foi sorteado, começa negativo para não dar confitos com o operador ternário
  const [modalVisible, setModalVisible] = useState(false)
  const [titulo, setTitulo] = useState()
  const [dados, setDados] = useState([])


  function salvar() {
    if (titulo == '') {
      alert('Por favor informe o título')
      return
    }
    const valor = new sorteioNome(titulo, nomes[sorteado], nomes)
    const save = [...dados, valor]
    setDados(save)

    alert('Salvo!')
    setModalVisible(!modalVisible)
  }


  function nomeSorteado() {

    if (nomes.length <= 1) {
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
      <ImageBackground
        source={require('../Assets/fundo.png')}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center' }}
      >

        <View style={styles.center}>
          <Text style={styles.text}>Digite o nome dos participantes:</Text>
        </View>

        <View style={styles.center}>
          <View style={styles.amount}>
            <TextInput
              placeholder="Ex: João da Silva"
              selectionColor="#000000"
              placeholderTextColor="#B6B6B6"
              onChangeText={setNome}
              ref={input => { this.textInput = input }} //através do 'ref' é indicado que este é o input a ser limpo ao adicionar um novo nome

            />
          </View>
        </View>

        <View style={styles.center}>
          <DefaultButton
            buttonText={'ADICIONAR'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            click={adiciona}
            width={200}
            height={50}
            marginBottom={2}
          />
        </View>

        <View style={styles.center}>
          <DefaultButton
            buttonText={'SORTEAR'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            click={nomeSorteado}
            width={200}
            height={50}
            marginBottom={20}
          />
        </View>

        <View style={styles.center}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, paddingTop: 30 }}>{sorteado < 0 ? 'O RESULTADO' : 'PARABÉNS'}</Text>
        </View>

        <View style={styles.center}>
          <Text style={styles.result}>{sorteado < 0 ? 'SERÁ' : nomes[sorteado]}</Text>
        </View>

        <View style={styles.center}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, paddingBottom: 40 }}>{sorteado < 0 ? 'MOSTRADO AQUI' : 'VOCÊ FOI SORTEADO!'}</Text>
        </View>

        <View style={styles.center}>
          <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, }}>QUANTIDADE DE PARTICIPANTES:</Text>
        </View>

        <View style={styles.center}>
          <Text style={{ fontWeight: "bold", fontSize: 20, }}>{nomes.length}</Text>
        </View>


        <FlatList data={nomes} renderItem={({ item }) => (
          <View style={styles.center}>
            <Text style={{ fontWeight: "bold", fontSize: 20, color: "#fff" }}>{item}</Text>
          </View>)}
        />

        <View style={styles.center}>
          <DefaultButton
            buttonText={'SALVAR RESULTADO'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            click={() => setModalVisible(!modalVisible)}
            width={200}
            height={50}
            marginBottom={20}
          />
        </View>

        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={styles.tamModal}>
            <View style={styles.centralModal}>
              <TextInput placeholder='Digite o título do sorteio' onChangeText={setTitulo}
                style={styles.amount} maxLength={25} />
              <DefaultButton
                buttonText={'SALVAR '}
                backgroundColor={'#00BF63'}
                marginTop={14}
                click={salvar}
                width={200}
                height={50}
              />
            </View>
          </View>
        </Modal>

        <View style={styles.center}>
          <DefaultButton
            buttonText={'EXCLUIR'}
            backgroundColor={'#00BF63'}
            marginTop={14}
            // click={() => setModalVisible(!modalVisible)}
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
    width: "60%",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#fff",
    padding: 5,
    marginBottom: 10,
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    fontStyle: "italic"
  },
  center: {
    alignItems: "center",
  }
});
