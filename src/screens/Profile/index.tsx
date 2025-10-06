import { useCallback } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '@/components';
import { Paths } from '@/navigation/paths';

function Profile() {
  const navigation = useNavigation();

  const handleNavigate = useCallback(() => {
    navigation.navigate(Paths.Profile as never);
  }, [navigation]);

  return (
    <View className="flex-1 px-4">
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View className="flex-1 flex-col items-center mt-2">
          <Image
            source={require('assets/profile.jpg')}
            className="w-[136px] h-[136px] rounded-full mb-1"
          />
          <Text className="mb-1 font-poppinsMedium text-lg text-white">
            Bruno Andrade
          </Text>
          <Text className="mb-4 font-poppinsMedium text-xs text-color4">
            brunnoandradi@gmail.com
          </Text>
          <Button
            size="sm"
            fontSize="xs"
            variant="outlineSecondary"
            text="Editar"
            onPress={handleNavigate}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default Profile;
