import { StyleSheet, Text, View, TextInput } from 'react-native';

import DefaultButton from '../component/DefaultButton';

export default function ScreenNumber() { 

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text}>Quantidade de participantes:</Text>
      </View>

      <View style={styles.amount}>
        <TextInput
          placeholder="20"
          selectionColor="#000000"
          placeholderTextColor="#B6B6B6"
        />
      </View>

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
        <Text style={styles.text}>O NÉMERO SORTEADOR FOI:</Text>
      </View>

      <View>
        <Text style={styles.result}>2</Text>
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
