//importacion de modulos 
import { StatusBar } from "expo-status-bar"; //barra de estado
import React from "react";//estilos
import { StyleSheet } from "react-native"; //estilos
import { NavigationContainer } from "@react-navigation/native"; //contenedor de navegacion
import { createStackNavigator } from "@react-navigation/stack"; //stack´s

//pantallas para poder navegar 
import UsersList from "./screens/UsersList"; 
import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        headerTintColor: "#000000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
        <Stack.Screen
        name="UsersList"
        component={UsersList}
        options={{ title: "LISTA DE USUARIOS" }}
      />
        <Stack.Screen
        name="CreateUserScreen"
        component={CreateUserScreen}
        options={{title: "CREAR USUARIOS"}}
      />
           
      <Stack.Screen
        name="UserDetailScreen"
        component={UserDetailScreen}
        options={{ title: "DETALLES DE USUARIO" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
