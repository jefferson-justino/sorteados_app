import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

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
      <ImageBackground
        source={require('../Assets/fundo.jpg')}  
        resizeMode='cover'
        style={{flex: 1, justifyContent: 'center'}}
      >

        <View style={{ alignItems: 'center' }}>
        <Image
          source={require('../Assets/duende.png')}
          style={{width: 200, height: 200}}
        />
        </View>

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
      </ImageBackground>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  block:{
    alignItems: 'center',
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    paddingBottom: 15,
    margin: 40,
    width:'80%'
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: 'white'
  },
  textBody: {
    fontSize: 15,
    fontWeight: "bold",
    color: 'white'
  }
});
