import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

const EditDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#03575C' }}>
      <DrawerContentScrollView {...props}>
          <View style={{ padding: 20, flexDirection: "row", alignItems: 'center' }}>
              <Image
                source={require('../Assets/trevo1.png')}
                style={{
                  height: 65,
                  width: 65,
                  borderRadius: 40,
                  marginBottom: 0,
                  marginRight: 20,
                }}
              />
              <Text style={{ color: '#FCFCFC', fontSize: 26}}>Sorteados</Text>
          </View>
        <View style={{ flex: 1, backgroundColor: '#03575C', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#fff' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 }}>
          <Ionicons
            name="logo-twitter"
            size={25}
            color={'#FCFCFC'}
            onPress={() => {
              props.navigation.navigate;
            }}
          />
          <Ionicons name="logo-facebook" size={25} color={'#FCFCFC'} />
          <Ionicons name="logo-instagram" size={25} color={'#FCFCFC'} />
          <Ionicons name="logo-github" size={25} color={'#FCFCFC'} />
        </View>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate;
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="share-social-outline" size={22} color={'#fff'} />
            <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 5 }}>Compartilhar</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate;
          }}
          style={{ paddingVertical: 15 }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="chatbox-ellipses-outline" size={22} color={'#fff'} />
            <Text style={{ color: '#FCFCFC', fontSize: 16, marginLeft: 5 }}>Feedback</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditDrawer;
