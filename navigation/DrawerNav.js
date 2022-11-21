import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as react from 'react';
import TabNav from './TabNavigator';
import ProfileScreen from '../screens/Profile';

export default class DrawerNavigator extends react.Component {
  constructor() {
    super();
    this.state = {};
    this.Drawer = createDrawerNavigator();
  }

  render() {
    return (
      <NavigationContainer>
        <this.Drawer.Navigator initialRouteName="Home">
          <this.Drawer.Screen name="Home" component={TabNav} />
          <this.Drawer.Screen name="Profile" component={ProfileScreen} />
        </this.Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
