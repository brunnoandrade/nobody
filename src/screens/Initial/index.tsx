import React from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { IconEmail, IconGoogle, IconFacebook } from '@/assets/icons';
import { Button, Slider } from '@/components';

const Initial = () => {
  const navigation = useNavigation();

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <LinearGradient
        colors={['#1a172f', '#181a20', '#1a172f']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
        <View className="flex-1">
          <Slider />
        </View>

        <View className="mt-6 px-6">
          <Button
            variant="primary"
            borderRadius="xl"
            text="Continue com seu e-mail"
            icon={<IconEmail />}
            onPress={() => handleNavigate('SignIn')}
          />
        </View>

        <View className="flex-row px-6 mt-4 space-x-3">
          <View className="flex-1">
            <Button
              variant="outline"
              borderRadius="xl"
              icon={<IconGoogle />}
              iconPosition="center"
              onPress={() => {}}
            />
          </View>
          <View className="flex-1">
            <Button
              variant="outline"
              borderRadius="xl"
              icon={<IconFacebook />}
              iconPosition="center"
              onPress={() => {}}
            />
          </View>
        </View>

        <View className="px-6 py-6">
          <Text className="text-center text-xs text-gray-300">
            Ao continuar, você concorda com os Termos de Serviço e Política de
            Privacidade da Oppen.
          </Text>
        </View>
      </LinearGradient>
    </>
  );
};

export default Initial;
