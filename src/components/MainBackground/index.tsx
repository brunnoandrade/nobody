import { StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MainBackgroundProps {
  children: React.ReactNode;
}

function MainBackground({ children }: MainBackgroundProps) {
  return (
    <LinearGradient
      colors={['#1a172f', '#181a20', '#1a172f']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      {children}
    </LinearGradient>
  );
}

export default MainBackground;
