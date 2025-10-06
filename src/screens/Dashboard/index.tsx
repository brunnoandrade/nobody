import * as React from 'react';
import { View } from 'react-native';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import { CustomTabBar, MainBackground, MainHeader } from '@/components';

import Home from '@/screens/Home';

const Tab = createBottomTabNavigator();

function Dashboard() {
  return (
    <MainBackground>
      <MainHeader />
      <View className="flex-1 rounded-sm py-4 z-10">
        <Tab.Navigator
          tabBar={(props) => <CustomTabBar {...props} />}
          screenOptions={{
            headerShown: false,
            headerTitle: '',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Search" component={Home} />
          <Tab.Screen name="PartinerMap" component={Home} />
          <Tab.Screen name="Favorite" component={Home} />
          <Tab.Screen name="Profile" component={Home} />
        </Tab.Navigator>
      </View>
    </MainBackground>
  );
}

export default Dashboard;
