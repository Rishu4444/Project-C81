import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as react from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CreateStoryScreen from '../screens/CreateStory';
import FeedScreen from '../screens/Feed';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class TabNav extends react.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Feed') {
                iconName = focused
                  ? 'book'
                  : 'book-outline';
              } else if (route.name === 'CreateStory') {
                iconName = focused ? 'create' : 'create-outline';
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
          <Tab.Screen name="CreateStory" component={CreateStoryScreen} />
          <Tab.Screen name="Feed" component={FeedScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const Tab = createBottomTabNavigator();
