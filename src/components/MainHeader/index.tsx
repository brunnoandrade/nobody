import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IconNotification } from '@/assets/icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MainHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-row items-center justify-between px-4 bg-transparent"
      style={{ paddingTop: insets.top }}
    >
      <Text className="text-white text-xl font-poppinsMedium">Dashboard</Text>
      <View className="flex-row items-center space-x-4">
        <TouchableOpacity className="relative">
          <IconNotification />
          <View className="absolute -top-1 -right-1 bg-red-500 rounded-full px-1.5">
            <Text className="text-white text-[10px] font-poppinsMedium">2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={{ uri: 'https://i.pravatar.cc/150?img=6' }}
            className="w-10 h-10 rounded-full"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default MainHeader;
