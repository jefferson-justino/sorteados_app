import { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Historic() {

  const [test] = useState([
    {
      icon: <Icon name="account-circle" size={35} color={'#000000'} />,
      name: "Lucas", type: "Sorteio por Nome", id: "1"
    },
    {
      icon: <Icon name="numeric-1-circle-outline" size={35} color={'#000000'} />,
      name: "N° 22", type: "Sorteio por Número", id: "2"
    },
    {
      icon: <Icon name="account-circle" size={35} color={'#000000'} />,
      name: "Lucas", type: "Sorteio por Nome", id: "3"
    },
    {
      icon: <Icon name="numeric-1-circle-outline" size={35} color={'#000000'} />,
      name: "N° 22", type: "Sorteio por Número", id: "4"
    },
    {
      icon: <Icon name="account-circle" size={35} color={'#000000'} />,
      name: "Lucas", type: "Sorteio por Nome", id: "5"
    },
    {
      icon: <Icon name="numeric-1-circle-outline" size={35} color={'#000000'} />,
      name: "N° 22", type: "Sorteio por Número", id: "6"
    },
    {
      icon: <Icon name="account-circle" size={35} color={'#000000'} />,
      name: "Lucas", type: "Sorteio por Nome", id: "7"
    },
    {
      icon: <Icon name="numeric-1-circle-outline" size={35} color={'#000000'} />,
      name: "N° 22", type: "Sorteio por Número", id: "8"
    },
    {
      icon: <Icon name="account-circle" size={35} color={'#000000'} />,
      name: "Lucas", type: "Sorteio por Nome", id: "9"
    },
    {
      icon: <Icon name="numeric-1-circle-outline" size={35} color={'#000000'} />,
      name: "N° 22", type: "Sorteio por Número", id: "10"
    },
  ])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/fundo.png')}
        resizeMode='cover'
        style={{ flex: 1, justifyContent: 'center' }}
      >

        <FlatList
          keyExtractor={(item) => item.id}
          data={test}
          renderItem={({ item }) => (
            <View style={styles.block}>
              <Text style={styles.item}>{item.icon} </Text>
              <Text style={styles.item}> {item.type} {"\n"} Vencedor: {item.name}</Text>
            </View>
          )}
        />

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    marginTop: 20,
    padding: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#00BF63",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  item: {
    fontSize: 20,
    color: '#fff'
  }
});