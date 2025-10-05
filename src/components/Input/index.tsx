import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from 'react';
import {
  Animated,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text';
import { FormikErrors } from 'formik';
import { IconsTypes } from '@/assets/icons';
import * as Icons from '@/assets/icons';

interface States {
  error?: string | boolean | FormikErrors<any>;
  success?: string | boolean;
}

interface IconTypes {
  icon?: IconsTypes | string;
  iconPosition?: 'left' | 'right';
}

interface InputProps
  extends Omit<React.ComponentProps<typeof TextInput>, 'style'>,
    IconTypes,
    States {
  label: string;
  mask?: TextInputMaskTypeProp;
  helperText?: string;
  password?: boolean;
  persistAutoFocus?: boolean;
  marginBottom?: number;
}

export default function Input({
  value,
  label,
  icon,
  iconPosition = 'left',
  mask,
  helperText,
  marginBottom = 0,
  error,
  success,
  password,
  persistAutoFocus,
  onFocus,
  onBlur,
  ...props
}: InputProps) {
  const [focused, setFocused] = useState(false);
  const [filled, setFilled] = useState(!!value);
  const [visible, setVisible] = useState(false);

  const inputRef = useRef<TextInput | TextInputMask>(null);

  const focusedAnimationRef = useRef(
    new Animated.Value(!value ? 0 : 1),
  ).current;

  useEffect(() => {
    if (persistAutoFocus && inputRef.current) {
      if (mask && 'getElement' in inputRef.current) {
        (inputRef.current as any).getElement().focus();
      } else {
        (inputRef.current as any).focus();
      }
    }
  }, [mask, persistAutoFocus]);

  useEffect(() => {
    if (value) setFilled(true);
  }, [value]);

  useEffect(() => {
    Animated.timing(focusedAnimationRef, {
      toValue: focused || !!value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [focusedAnimationRef, focused, value]);

  const handleToggle = useCallback(() => {
    setVisible((v) => !v);
  }, []);

  const handleFocus = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(e);
      setFocused(true);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(e);
      setFocused(false);
    },
    [onBlur],
  );

  const handleFocusOutside = useCallback(() => {
    if (inputRef.current) {
      if (mask && 'getElement' in inputRef.current) {
        (inputRef.current as any).getElement().focus();
      } else {
        (inputRef.current as any).focus();
      }
    }
  }, [mask]);

  const labelStyles = useMemo(
    () => ({
      top: focusedAnimationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 10],
      }),
      fontSize: focusedAnimationRef.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
    }),
    [focusedAnimationRef],
  );

  const iconColor = success ? '#22c55e' : error ? '#ef4444' : '#9ca3af';

  const IconComp = icon ? Icons[icon as IconsTypes] : undefined;

  return (
    <View style={{ marginBottom }}>
      <View className="h-16 justify-center">
        {label && (
          <Animated.Text
            onPress={handleFocusOutside}
            style={labelStyles}
            className={`absolute z-10 text-gray-400 ${
              error ? 'text-red-500' : success ? 'text-green-500' : ''
            } ${icon && iconPosition === 'left' ? 'left-16' : 'left-4'}`}
          >
            {label}
          </Animated.Text>
        )}

        {icon && IconComp && (
          <View
            className={`absolute z-20 ${
              iconPosition === 'left' ? 'left-4' : 'right-4'
            }`}
          >
            <IconComp
              width={28}
              height={28}
              stroke={iconColor}
              onPress={handleFocusOutside}
            />
          </View>
        )}

        {password && (
          <TouchableOpacity
            onPress={handleToggle}
            className="absolute z-20 right-4"
          >
            {visible ? (
              <Icons.IconEyeClosed width={28} height={28} stroke="#9ca3af" />
            ) : (
              <Icons.IconEyeOpen width={28} height={28} stroke="#9ca3af" />
            )}
          </TouchableOpacity>
        )}

        {mask ? (
          <TextInputMask
            ref={inputRef as any}
            type={mask}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={password ? !visible : false}
            className={`h-16 px-4 text-base text-gray-800 bg-gray-100 rounded-md border ${
              focused ? 'pt-6 border-indigo-500 bg-white' : ''
            } ${filled ? 'pt-6' : ''} ${
              error
                ? 'border-red-500'
                : success
                  ? 'border-green-500'
                  : 'border-transparent'
            } ${icon && iconPosition === 'left' ? 'pl-16' : ''} ${
              icon && iconPosition === 'right' ? 'pr-16' : ''
            } ${password ? 'pr-16' : ''}`}
            {...props}
          />
        ) : (
          <TextInput
            ref={inputRef as any}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={password ? !visible : false}
            className={`h-16 px-4 text-base text-gray-800 bg-gray-100 rounded-md border ${
              focused ? 'pt-6 border-indigo-500 bg-white' : ''
            } ${filled ? 'pt-6' : ''} ${
              error
                ? 'border-red-500'
                : success
                  ? 'border-green-500'
                  : 'border-transparent'
            } ${icon && iconPosition === 'left' ? 'pl-16' : ''} ${
              icon && iconPosition === 'right' ? 'pr-16' : ''
            } ${password ? 'pr-16' : ''}`}
            {...props}
          />
        )}
      </View>

      {helperText && (
        <Text className="mt-1 text-xs text-gray-400">{helperText}</Text>
      )}
      {error && (
        <Text className="mt-1 text-xs text-red-500">{error as string}</Text>
      )}
      {success && (
        <Text className="mt-1 text-xs text-green-500">{success as string}</Text>
      )}
    </View>
  );
}
