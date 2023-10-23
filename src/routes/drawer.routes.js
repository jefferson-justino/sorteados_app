import { createDrawerNavigator } from "@react-navigation/drawer";

import Ionicons from 'react-native-vector-icons/Ionicons';

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
            drawerActiveTintColor: '#03575C',       //cor da letra/icone da página selecionada
            drawerInactiveTintColor: '#FCFCFC',     //cor das letras/icones que não estão selecionadas
            drawerLabelStyle: { marginLeft: -25, fontSize: 18 }, //distância e tamanho das letras/icones do drawer
            }}
        >
            <Drawer.Screen
                name="Início"
                component={Home}
                options={{
                    headerStyle: { backgroundColor: '#E9E9E9' },
                    headerTitle: '',
                    headerTintColor: '#03575C', //cor do icone de menu
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="home-outline" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Histórico"
                component={Historic}
                options={{
                    headerStyle: { backgroundColor: '#E9E9E9' },
                    headerTitle: 'Histórico',
                    headerTintColor: '#03575C',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="time-outline" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Sorteio por Número"
                component={ScreenNumber}
                options={{
                    headerStyle: { backgroundColor: '#E9E9E9' },
                    headerTitle: 'Sorteio por Número',
                    headerTintColor: '#03575C',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="list-outline" size={26} color={color} />,
                  }}
            />

            <Drawer.Screen
                name="Sorteio por Nome"
                component={ScreenName}
                options={{
                    headerStyle: { backgroundColor: '#E9E9E9' },
                    headerTitle: 'Sorteio por Nome',
                    headerTintColor: '#03575C',
                    headerTitleAlign: 'center',
                    drawerIcon: ({ color }) => <Ionicons name="people-outline" size={26} color={color} />,
                  }}
            />
        </Drawer.Navigator>
    )
}