import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { SafeScreen } from '@/components/templates';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeScreen>
      <View className="flex-1 bg-white px-6 justify-center">
        <View className="items-center mb-12">
          <Text className="text-4xl font-extrabold text-indigo-600 tracking-tight">
            Upgrd
          </Text>
          <Text className="text-base text-gray-500 mt-2">
            Simplifique suas conquistas
          </Text>
        </View>

        <View className="mb-4 w-full">
          <Text className="text-gray-700 mb-1 font-medium">E-mail</Text>
          <TextInput
            autoCapitalize="none"
            className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 border border-gray-200 focus:border-indigo-500"
            keyboardType="email-address"
            onChangeText={setEmail}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#9ca3af"
            value={email}
          />
        </View>

        <View className="mb-6 w-full">
          <Text className="text-gray-700 mb-1 font-medium">Senha</Text>
          <TextInput
            className="w-full bg-gray-100 text-gray-900 rounded-lg px-4 py-3 border border-gray-200 focus:border-indigo-500"
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            placeholderTextColor="#9ca3af"
            secureTextEntry
            value={password}
          />
          <TouchableOpacity className="mt-2">
            <Text className="text-indigo-600 text-sm font-medium">
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="w-full bg-indigo-500 py-3 rounded-lg active:bg-indigo-600">
          <Text className="text-center text-white text-lg font-semibold">
            Entrar
          </Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-8">
          <Text className="text-gray-600">Não tem uma conta? </Text>
          <TouchableOpacity>
            <Text className="text-indigo-600 font-semibold">Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeScreen>
  );
}

export default Login;
