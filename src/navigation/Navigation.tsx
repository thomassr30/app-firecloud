import { NavigationContainer } from '@react-navigation/native'
import { WelcomeScreen } from '../pages/auth/WelcomeScreen'
import { LoginScreen } from '../pages/auth/LoginScreen'
import { RegisterScreen } from '../pages/auth/RegisterScreen'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

export const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName='WelcomeScreen'
            screenOptions={{
                headerShown: false,
            }}
            >
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name='LoginScreen' component={LoginScreen} />
            <Stack.Screen name='RegisterScreen' component={RegisterScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}
