import type { RootStackParamList } from '@/navigation/types';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Paths } from '@/navigation/paths';
import { useTheme } from '@/theme';
import { Platform } from 'react-native';
import { IconArrowBack } from '@/assets/icons';
import Public from './Public';
import Private from './Private';

const RootStack = createStackNavigator<RootStackParamList>();

interface RouteProps {
  name: string;
  component: React.ComponentType;
  options?: object;
}

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  const paddingLeft = Platform.select({ ios: 16, android: 0 });

  const routes = false ? Public : Private;

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <RootStack.Navigator
          key={variant}
          initialRouteName={Paths.Dashboard}
          screenOptions={{
            headerTitle: '',
            headerBackTitle: '',
            headerTransparent: true,
            headerShadowVisible: false,
            headerLeftContainerStyle: { paddingLeft },
            headerBackImage: () => <IconArrowBack width={32} height={32} />,
          }}
        >
          {routes.map(({ name, component, options }: RouteProps) => {
            return (
              <RootStack.Screen
                key={name}
                name={name as keyof RootStackParamList}
                component={component}
                options={options}
              />
            );
          })}
        </RootStack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
