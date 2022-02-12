
import Home from './Components/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NextScreen from "./Components/webview";
import  colors  from './Themes/colors';
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
                <Stack.Screen name="Details" component={NextScreen} style={styles.bckgrd_color}/>
                <Stack.Screen name="Preview" component={NextScreen} style={styles.bckgrd_color}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    bckgrd_color: {
        backgroundColor: colors.background
    },
});