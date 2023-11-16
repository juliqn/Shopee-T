import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './src/navigators/TabNavigator';
import DetailsScreen from './src/screens/DetailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import SplashScreen from 'react-native-splash-screen';
import SingUpScreen from './src/screens/SingIn';
import SingInScreen from './src/screens/SingIn';
import PasswordScreen from './src/screens/Password';
import HomeScreenView from './src/screens/Home';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"HomeView"} screenOptions={{headerShown: false}}>
        <Stack.Screen name={"HomeView"} component={ HomeScreenView}/>
        <Stack.Screen name={"SingUp"} component={ SingUpScreen}/>
        <Stack.Screen name={"SingIn"} component={ SingInScreen }/>
        <Stack.Screen name={"Password"} component={PasswordScreen}/>
        <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}></Stack.Screen>
        {/* <Stack.Screen name={"ProductDesc"} component={ProductsDescription}/> */}
        {/* <Stack.Screen name={"Inventory"} component={LoadedProducts}/> */}
        {/* <Stack.Screen name={"AddProduct"} component={AddProduct}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
