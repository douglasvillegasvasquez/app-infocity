import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Image,
  Text,} from "react-native";
import TabBarIcon from '../components/TabBarIcon';

import MapScreen from '../screens/MapScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import SavedScreen from '../screens/SavedScreen';
import LoginScreen from '../screens/LoginScreen';
import Contatos from '../screens/Contatos';
import Button from '../screens/Button';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
     
      <BottomTab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Explorar',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-search" />,
        }}
        
      />
      <BottomTab.Screen
        name="Salvos"
        component={SavedScreen}
        options={{
          title: 'Salvos',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-heart-empty" />,
        }}
      />
      <BottomTab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => <Image source={require('../assets/logo.png')}
          style={styles.img}
          />,
        }}
      />
      <BottomTab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          title: 'Messages',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-chatboxes" />,
        }}
      />
      <BottomTab.Screen
        name="Perfil"
        component={SettingsScreen}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
      <BottomTab.Screen
        name="Em Teste"
        component={Contatos}
        options={{
          title: 'Em Teste',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
      <BottomTab.Screen
        name="Button"
        component={Button}
        options={{
          title: 'Button',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Map':
      return 'Explorar';
    case 'Salvos':
      return 'Favoritos';
    case 'Login':
      return 'Login';
    case 'Contatos':
      return 'Contatos';
     case 'Messages':
      return 'Mensagens';
     case 'Perfil':
      return 'Perfil';
    case 'Button':
      return 'Button';
       
  }
}
const styles = StyleSheet.create({
  
  img:{
    marginTop:15,
    height:45,
    width:45,
  },
});
