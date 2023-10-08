import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {NavigationContainer , useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Resturants from '../Restaurants/Restaurants';
import Weather from '../Weather/Weather';
import auth from '@react-native-firebase/auth';

const Tab = createBottomTabNavigator();


const Home = () => {
  const navigation = useNavigation();
  const handleSignout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('signout');
        navigation.goBack()
      })
      .catch(error => {
        showErrorMsg(error.message, 'error');
      });
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Weather"
        options={({navigation}) => ({
          headerRight: () => (
            <View style={styles.btnContainer}>
              <Button title="SignOut" onPress={handleSignout} color="red"/>
            </View>
          )
        })}
        component={Weather}
      />
      <Tab.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <View style={styles.btnContainer}>
              <Button title="SignOut" onPress={handleSignout} color="red" />
            </View>
          )
        })}
        name="Resturants"
        component={Resturants}
      />
    </Tab.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  btnContainer: {
    marginRight: 10,
  },
});
