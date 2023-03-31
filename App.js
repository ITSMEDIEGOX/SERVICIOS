import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loggin from './Screens/LogginScreen';
import Home from './Screens/HomeScreen';
import Formulario from './Screens/Formulario';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loggin"
          component={Loggin}
          options={{ title: 'INICIAR SESION' }} 
          />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'BIENVENIDOS'}}  
        />
        <Stack.Screen
          name="Formulario"
          component={Formulario}
          options={{title: 'DE UNA'}}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;