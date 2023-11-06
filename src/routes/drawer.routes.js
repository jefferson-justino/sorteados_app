import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import EditDrawer from "./EditDrawer.routes";

import Home from '../screens/Home'
import Historic from '../screens/Historic'
import ScreenNumber from '../screens/ScreenNumber'
import ScreenName from '../screens/ScreenName'

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator
            drawerContent={(props) => <EditDrawer {...props} />}
            screenOptions={{
            drawerActiveBackgroundColor: '#fff',    //fundo da seleção da página
            drawerActiveTintColor: '#27864F',       //cor da letra/icone da página selecionada
            drawerInactiveTintColor: '#FCFCFC',     //cor das letras/icones que não estão selecionadas
            drawerLabelStyle: { marginLeft: -25, fontSize: 18 }, //distância e tamanho das letras/icones do drawer
            }}
        >
            <Drawer.Screen
                name="Início"
                component={Home}
                options={{
                    headerStyle: { backgroundColor: '#27864F' },
                    headerTitle: 'SORTEADOS',
                    headerTintColor: '#fff', //cor do icone de menu
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="home-outline" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Sorteio por Número"
                component={ScreenNumber}
                options={{
                    headerStyle: { backgroundColor: '#27864F' },
                    headerTitle: 'Sorteio por Número',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Icon name="numeric" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Sorteio por Nome"
                component={ScreenName}
                options={{
                    headerStyle: { backgroundColor: '#27864F' },
                    headerTitle: 'Sorteio por Nome',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="people-outline" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Histórico"
                component={Historic}
                options={{
                    headerStyle: { backgroundColor: '#27864F' },
                    headerTitle: 'Histórico',
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="time-outline" size={26} color={color} />,
                  }}
            />
        </Drawer.Navigator>
    )
}