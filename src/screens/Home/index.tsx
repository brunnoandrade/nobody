import { useCallback } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styled } from 'nativewind';
import { MainBackground } from '@/components';
import { Paths } from '@/navigation/paths';
import LinearGradient from 'react-native-linear-gradient';

const TWLinearGradient = styled(LinearGradient);

function BarraProgresso({ valor = 68.99 }: { valor?: number }) {
  return (
    <View className="h-3 rounded-full overflow-hidden bg-white/30">
      <View
        className="h-3 bg-black"
        style={{ width: `${Math.max(0, Math.min(100, valor))}%` }}
      />
    </View>
  );
}

function Home() {
  const navigation = useNavigation();

  const irParaPerfil = useCallback(() => {
    navigation.navigate(Paths.Profile as never);
  }, [navigation]);

  return (
    <MainBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 px-4 pt-6"
      >
        <Text className="text-white text-[28px] leading-8 font-poppinsMedium">
          Olá,
        </Text>
        <Text className="text-white text-[28px] leading-8 font-poppinsMedium">
          Tulinho Pica de Todos 👋
        </Text>

        <View className="flex-row mt-4">
          <TouchableOpacity className="bg-[#2E8BFF] rounded-full px-4 py-2 mr-3">
            <Text className="text-white text-sm font-poppinsMedium">
              Visão geral
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="rounded-full px-4 py-2">
            <Text className="text-gray-400 text-sm font-poppinsMedium">
              Produtividade
            </Text>
          </TouchableOpacity>
        </View>

        <TWLinearGradient
          colors={['#6EE7B7', '#93C5FD', '#C4B5FD']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          className="mt-6 rounded-3xl p-4"
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.25,
            shadowRadius: 12,
            shadowOffset: { width: 0, height: 8 },
            elevation: 8,
          }}
        >
          <Text className="text-[18px] text-black">
            Progresso das Tarefas Prioritárias
          </Text>
          <Text className="text-black/80 text-xs mt-1">3/5 concluídas</Text>

          <View className="mt-3">
            <BarraProgresso valor={68.99} />
            <Text className="text-black/80 text-xs mt-2 text-right">
              68,99%
            </Text>
          </View>
        </TWLinearGradient>

        <View className="mt-6 space-y-3">
          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center justify-between bg-[#1f1f2b] rounded-2xl p-4"
          >
            <View className="flex-row items-center">
              <TWLinearGradient
                colors={['#FFB074', '#FF719A']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-10 h-10 rounded-xl mr-3"
              />
              <Text className="text-white font-poppinsMedium">
                Total de Tarefas
              </Text>
            </View>

            <View className="flex-row items-center">
              <Text className="text-[#FFD166] font-poppinsMedium mr-3">16</Text>
              <Text className="text-white/60 text-xl">{'›'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center justify-between bg-[#1f1f2b] rounded-2xl p-4"
          >
            <View className="flex-row items-center">
              <TWLinearGradient
                colors={['#6EE7B7', '#10B981']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-10 h-10 rounded-xl mr-3"
              />
              <Text className="text-white font-poppinsMedium">Concluídas</Text>
            </View>

            <View className="flex-row items-center">
              <Text className="text-[#34D399] font-poppinsMedium mr-3">32</Text>
              <Text className="text-white/60 text-xl">{'›'}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            className="flex-row items-center justify-between bg-[#1f1f2b] rounded-2xl p-4"
            onPress={irParaPerfil}
          >
            <View className="flex-row items-center">
              <TWLinearGradient
                colors={['#F9A8D4', '#F472B6']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-10 h-10 rounded-xl mr-3"
              />
              <Text className="text-white font-poppinsMedium">
                Total de Projetos
              </Text>
            </View>

            <View className="flex-row items-center">
              <Text className="text-[#F472B6] font-poppinsMedium mr-3">8</Text>
              <Text className="text-white/60 text-xl">{'›'}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainBackground>
  );
}

export default Home;
