import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigator from './TabNavigator';

import LogIn from '../Screens/LogIn';
import SignUp from '../Screens/SignUp';
import FormDetails from '../Screens/FormDetails';
import OTP from '../Screens/OTP';
import Splash from '../Screens/Splash';
import TaxInvoice from '../Screens/TaxInvoice';
import WelcomeScreen from '../Screens/WelcomeScreen';
import LogInSignUp from '../Screens/LogInSignUp';
import GetStarted from '../Screens/GetStarted';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='splash' >
                {/* <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='tab' > */}
                <Stack.Screen name='tab' component={TabNavigator} />
                <Stack.Screen name="splash" component={Splash} />
                <Stack.Screen name="getstarted" component={GetStarted} />
                <Stack.Screen name="loginsignup" component={LogInSignUp} />
                <Stack.Screen name="login" component={LogIn} />
                <Stack.Screen name="signup" component={SignUp} />
                <Stack.Screen name="formdetails" component={FormDetails} />
                <Stack.Screen name="taxinvoice" component={TaxInvoice} />
                <Stack.Screen name="otp" component={OTP} />
                <Stack.Screen name="welcomeScreen" component={WelcomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator