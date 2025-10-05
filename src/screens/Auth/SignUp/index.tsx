import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Input, KeyboardAvoiding } from '@/components';
import { Paths } from '@/navigation/paths';
import { Formik } from 'formik';
import * as Yup from 'yup';
import LinearGradient from 'react-native-linear-gradient';

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Campo obrigatório'),
  email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
  password: Yup.string()
    .matches(/\d/, 'Sua senha deve ter um número (0-9)')
    .required('Campo obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não coincidem')
    .required('Campo obrigatório'),
});

export default function SignUp() {
  const navigation = useNavigation();

  const onSubmit = useCallback((values: typeof initialValues) => {
    console.log('signup', values);
  }, []);

  const handleNavigate = (screen: string) => {
    navigation.navigate(screen as never);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnMount
    >
      {({
        values,
        errors,
        touched,
        isValid,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <KeyboardAvoiding>
          <LinearGradient
            colors={['#1a172f', '#181a20', '#1a172f']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="flex-1"
          >
            <View className="flex-1 justify-center items-center px-6 pt-28">
              <View className="w-full">
                <Text className="mb-2 font-poppins text-3xl font-bold text-white">
                  Cadastro
                </Text>
                <Text className="mb-6 font-poppins text-lg text-white">
                  Crie sua conta para começar
                </Text>

                <View className="w-full h-52 justify-between">
                  <Input
                    icon="IconIdentity"
                    label="Nome de usuário"
                    value={values.username}
                    error={touched.username && errors.username}
                    autoCapitalize="none"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                  />

                  <Input
                    icon="IconEmail"
                    label="E-mail"
                    value={values.email}
                    error={touched.email && errors.email}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />

                  <Button
                    size="md"
                    variant="primary"
                    borderRadius="xl"
                    text="Cadastrar"
                    onPress={handleSubmit as any}
                    disabled={!isValid}
                  />
                </View>
              </View>

              <View className="flex-1 w-full justify-center items-center" />

              <View className="w-full items-center pb-12">
                <TouchableOpacity
                  onPress={() => handleNavigate(Paths.SignIn)}
                  className="flex-row justify-center"
                >
                  <Text className="text-base text-gray-300">
                    Já possui uma conta?
                  </Text>
                  <Text className="text-base text-gray-300 font-bold ml-1">
                    Entrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </LinearGradient>
        </KeyboardAvoiding>
      )}
    </Formik>
  );
}
