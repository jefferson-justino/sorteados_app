import { StyleSheet, Text, View, TextInput } from 'react-native';

import DefaultButton from '../component/DefaultButton';

export default function ScreenName() { 

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>Digite o nome dos participantes:</Text>
      </View>

      <View style={styles.amount}>
        <TextInput
          placeholder="João da Silva"
          selectionColor="#000000"
          placeholderTextColor="#B6B6B6"
        />
      </View>

      <DefaultButton
        buttonText={'ADICIONAR'}
        backgroundColor={'#03575C'}
        marginTop={14}
        // click={}
        width={200}
        height={50}
        marginBottom={2}
      />

      <DefaultButton
        buttonText={'Sortear'}
        backgroundColor={'#03575C'}
        marginTop={14}
        // click={}
        width={200}
        height={50}
        marginBottom={20}
      />

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20, paddingTop: 30}}>PARABÉNS</Text>
      </View>

      <View>
        <Text style={styles.result}>Fulano</Text>
      </View>

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20, paddingBottom: 40}}>VOCÊ FOI SORTEADO!</Text>
      </View>

      <View>
        <Text style={{color: "#03575C", fontWeight: "bold", fontSize: 20,}}>QUANTIDADE DE PARTICIPANTES:</Text>
      </View>

      <View>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>3</Text>
      </View>

      <View>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>1. Alexander</Text>
        <Text style={{fontWeight: "bold", fontSize: 20,}}>2. Gilmar</Text>
      </View>

      <DefaultButton
        buttonText={'SALVAR RESULTADO'}
        backgroundColor={'#03575C'}
        marginTop={14}
        // click={}
        width={200}
        height={50}
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
