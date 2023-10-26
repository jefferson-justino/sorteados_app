import { StyleSheet, Text, View, TextInput, Modal } from 'react-native';
import { useState } from 'react'; 
import DefaultButton from '../component/DefaultButton';
import sorteioNumero from '../classes/sorteioNumero';//importa as classes

export default function ScreenNumber() { 
  const [quantidade, setQuantidade] = useState(0) // armazena a quantidade de participantes
  const [num, setNum] = useState() // armazena o número sorteado
  const [modalVisible, setModalVisible] = useState(false)
  const [titulo, setTitulo] = useState()
  const [dados, setDados] = useState([])

  function numero() {
    if (quantidade == 0 || quantidade == 1) {
      alert('Por favor informe um valor válido')
      return
    }

    setNum(Math.ceil(Math.random() * quantidade))

  }

  function salvar(){
    if (titulo == '') {
      alert('Por favor informe o título')
      return
    }
    const valor = new sorteioNumero(titulo,num, quantidade)
    const save =[...dados,valor]
    setDados(save)
   
    alert('Salvo!')
    setModalVisible(!modalVisible)
  }

 console.log(dados)





  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>Quantidade de participantes:</Text>
      </View>

      <View style={styles.amount}>
        <TextInput
          placeholder="Ex: 20"
          selectionColor="#000000"
          placeholderTextColor="#B6B6B6"
          keyboardType='numeric'
          onChangeText={setQuantidade}
          
        />
      </View>

      <DefaultButton
        buttonText={'SORTEAR'}
        backgroundColor={'#03575C'}
        marginTop={14}
         click={numero}
        width={200}
        height={50}
        marginBottom={20}
      />

      <View>
        <Text style={styles.text}>{!num ? '' : 'O NúMERO SORTEADOR FOI:'}</Text>
      </View>

      <View>
        <Text style={styles.result}>{!num ? '' : num}</Text>
      </View>

      <DefaultButton
        buttonText={'SALVAR RESULTADO'}
        backgroundColor={'#03575C'}
        marginTop={14}
        click={()=>setModalVisible(!modalVisible)}
        width={200}
        height={50}
      />
      <Modal visible={modalVisible} animationType="slide"  transparent={true}
       >
          <View style={styles.tamModal}>
        <View style={styles.centralModal}>
          <TextInput placeholder='Digite o título do sorteio' onChangeText={setTitulo}
           style={styles.amount} maxLength={25}/>
          <DefaultButton
        buttonText={'SALVAR '}
        backgroundColor={'#03575C'}
        marginTop={14}
        click={salvar}
        width={200}
        height={50}
        />
        </View>
        </View>

      </Modal>

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
  tamModal:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  text:{
    fontSize: 20,
    fontWeight: "bold", 
    padding: 15,
    color: "#03575C"
  },
  amount:{
    width: "15%",
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 8,
    padding: 5,
    marginBottom: 20
  },
  result: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
    fontStyle: "italic"
  }
});
