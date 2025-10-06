import { useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {
  IconHome,
  IconSearch,
  IconToday,
  IconFavorite,
  IconAccount,
} from '@/assets/icons';
import { Paths } from '@/navigation/paths';

function CustomTabBar({ state }: any) {
  const navigation = useNavigation();

  const handleNavigate = useCallback(
    (screen: string) => {
      navigation.navigate(screen as never);
    },
    [navigation],
  );

  return (
    <LinearGradient
      colors={['#181a20', '#1a172f', '#181a20']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View className="flex-row h-[70px] py-5">
        <TouchableOpacity
          onPress={() => handleNavigate(Paths.Profile)}
          className="flex-1 items-center justify-center"
        >
          <IconHome
            style={{ opacity: state.index === 0 ? 1 : 0.5 }}
            width={24}
            height={24}
            fill="#FFFFFF"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate(Paths.Profile)}
          className="flex-1 items-center justify-center"
        >
          <IconSearch
            style={{ opacity: state.index === 1 ? 1 : 0.5 }}
            width={24}
            height={24}
            fill="#FFFFFF"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate(Paths.Profile)}
          className="w-12 h-12 items-center justify-center rounded-full bg-primary -mt-2 mx-4"
        >
          <IconToday width={24} height={24} fill="#FFFFFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate(Paths.Profile)}
          className="flex-1 items-center justify-center"
        >
          <IconFavorite
            style={{ opacity: state.index === 3 ? 1 : 0.5 }}
            width={24}
            height={24}
            fill="#FFFFFF"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleNavigate(Paths.Profile)}
          className="flex-1 items-center justify-center"
        >
          <IconAccount
            style={{ opacity: state.index === 4 ? 1 : 0.5 }}
            width={24}
            height={24}
            fill="#FFFFFF"
          />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

export default CustomTabBar;
