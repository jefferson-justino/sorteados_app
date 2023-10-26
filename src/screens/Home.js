import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  function NavigationNumber(){
    navigation.navigate("Sorteio por Número")
  }

  function NavigationName(){
    navigation.navigate("Sorteio por Nome")
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity 
          style={styles.block} 
          onPress={NavigationNumber}
        >
          <Text 
            style={styles.textHeader}>
              SORTEIO POR NÚMERO
          </Text>

          <Text 
            style={styles.textBody}>
              Digite a quantidade máxima de participantes e sorteie 1 número aleatório.
          </Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <TouchableOpacity 
          style={styles.block} 
          onPress={NavigationName}
        >
          <Text 
            style={styles.textHeader}>
              SORTEIO POR NOME
          </Text>
          
          <Text 
            style={styles.textBody}>
              Crie uma lista de nomes e sorteie 1 nome aleatório entre os que estão na lista.
          </Text>
        </TouchableOpacity>
      </View>
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
  block:{
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "#03575C",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 15,
    margin: 40,
    width:'80%'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textBody: {
    fontSize: 15,
    fontWeight: "bold",

  }
});
