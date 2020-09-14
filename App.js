
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as firebase from 'firebase';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './controller/user-management/Login';


const Stack = createStackNavigator();

const App = ({navigation}) => {

     // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <Login />
  }
    return (
      <View>
        <Text>Welcome {user.email}</Text>
        <Button style = {styles.signOutButton} 
        title = 'Sign Out' 
        onPress={() =>
          firebase.auth()
          .signOut()
          .then(() => console.log('User signed out!'))
          .then(() =>  <MainScreen /> )
        }/>
      
      
      </View>
    )
    
    }

export default App;

export const MainScreen = ({navigation}) => {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: 'Welcome, ' }}
            />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </Stack.Navigator>
         </NavigationContainer>
  );

}

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Reco's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Reco' })
      }
    />
  );
};

const LoginScreen = ({ navigation }) => {
  return <Login />
};
const ProfileScreen = () => {
  return <Text>This is Reco's profile</Text>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutButton: {
    
  },
});
