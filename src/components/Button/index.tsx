import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacityProps,
} from 'react-native';

type TWSize = 'xs' | 'sm' | 'md' | 'lg';
type TWRadius = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type TWFontWeight = 'normal' | 'bold';
type TWFontSize = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends TouchableOpacityProps {
  text?: string;
  color?: string;
  spentText?: string;
  spentColor?: string;
  size?: TWSize;
  fontSize?: TWFontSize;
  borderRadius?: TWRadius;
  fontWeight?: TWFontWeight;
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'simple'
    | 'square'
    | 'outline'
    | 'outlineSecondary'
    | 'spents';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right' | 'center';
  loading?: boolean;
}

export default function Button({
  text,
  color,
  spentText,
  spentColor,
  size = 'sm',
  borderRadius = 'lg',
  fontWeight = 'bold',
  fontSize = 'sm',
  variant = 'primary',
  icon,
  iconPosition = 'left',
  loading = false,
  ...props
}: ButtonProps) {
  const heightClass: string = {
    xs: 'h-8',
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-14',
  }[size];

  const radiusClass: string = {
    xs: 'rounded-sm',
    sm: 'rounded-md',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-full',
  }[borderRadius];

  const variantClasses: string =
    {
      primary: 'bg-indigo-600 active:bg-indigo-700',
      secondary: 'bg-gray-600 active:bg-gray-700',
      success: 'bg-green-600 active:bg-green-700',
      danger: 'bg-rose-600 active:bg-rose-700',
      simple: 'bg-transparent',
      square: 'rounded-none bg-indigo-600 active:bg-indigo-700',
      outline: 'bg-transparent border border-indigo-600',
      outlineSecondary: 'bg-transparent border-2 border-gray-400',
      spents: 'bg-zinc-800 flex-row justify-around rounded-lg',
    }[variant] ?? 'bg-indigo-600';

  const textColor =
    color ??
    (variant === 'outline'
      ? 'text-indigo-600'
      : variant === 'outlineSecondary'
        ? 'text-gray-700'
        : variant === 'spents'
          ? 'text-gray-300'
          : 'text-white');

  const spentTextColor = spentColor ?? 'text-gray-300';
  const weightClass = fontWeight === 'bold' ? 'font-bold' : 'font-normal';

  const fontSizeClass: string = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  }[fontSize];

  return (
    <TouchableOpacity
      {...props}
      className={`w-full ${heightClass} ${radiusClass} ${variantClasses} px-4 flex-row items-center justify-center`}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <View
          className={`flex-row items-center justify-center ${
            icon && text ? 'space-x-2' : ''
          }`}
        >
          {icon && iconPosition === 'left' && <View>{icon}</View>}

          {text && (
            <Text className={`${textColor} ${fontSizeClass} ${weightClass}`}>
              {text}
            </Text>
          )}

          {spentText && (
            <Text
              className={`${spentTextColor} ${fontSizeClass} ${weightClass} ml-2`}
            >
              {spentText}
            </Text>
          )}

          {icon && iconPosition === 'right' && <View>{icon}</View>}

          {icon && iconPosition === 'center' && !text && <View>{icon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
}
