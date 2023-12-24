import React from "react";
import Home from "./src/Home";
import { store } from "./src/store";
import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Card from "./src/Cart";

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown:false}} name="Home" component={Home} />
          <Stack.Screen name="Cart" options={{title:"Meu Carrinho"}} component={Card}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
