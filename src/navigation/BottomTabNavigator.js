import React from 'react';

// Javascript
import {AnimatedTabBarNavigator} from 'react-native-animated-nav-tab-bar';
import Icon from 'react-native-vector-icons/Feather';
import HomeScreen from '../../src/screens/Home';

const Tabs = AnimatedTabBarNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#2F7C6E",
        inactiveTintColor: "#222222"
      }}
    >
      <Tabs.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon
              name="Home"
              size={size ? size : 24}
              color={focused ? color : "#222222"}
              focused={focused}
              color={color}
            />
          )
        }}
      />
    </Tabs.Navigator>
  );
};
export default BottomTabNavigator;
