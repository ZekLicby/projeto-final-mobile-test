import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import ForgetPassword from 'src/screens/ForgetPassword';
import PasswordScreen from 'src/screens/PasswordScreen';
import Profile from 'src/screens/Profile';
import Login from 'src/screens/Login';
import logoresponsivo from '../images/logo-responsivo.png';
import AddColaborator from 'src/screens/AddColaborator';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Logo = () => {
    return (
        <Image
            source={logoresponsivo}
            style={{ width: 50, height: 50, margin: 10 }}
        />
    );
};


const DrawerScreens = () => (
    <Drawer.Navigator
        initialRouteName='Profile'
    >
        <Drawer.Screen name="Meu Perfil"
            component={Profile}
            options={{
                headerStyle:{backgroundColor: '#D9D9D9'},
                headerRight: () => <Logo />,
            }}
        />
               <Drawer.Screen name="Cadastro de Colaborador"
            component={AddColaborator}
            options={{
                headerStyle:{backgroundColor: '#D9D9D9'},
                headerRight: () => <Logo />,
            }}
        />
    </Drawer.Navigator>

);

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                />
                <Stack.Screen
                    name="PasswordScreen"
                    component={PasswordScreen}
                />
                <Stack.Screen
                    name="DrawerScreens"
                    component={DrawerScreens}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}