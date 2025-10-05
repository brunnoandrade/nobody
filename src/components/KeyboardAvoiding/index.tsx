import React, { ReactNode } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
} from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';

interface KeyboardAvoidingProps extends Partial<KeyboardAvoidingViewProps> {
  offset?: boolean;
  children: ReactNode;
}

export default function KeyboardAvoiding({
  offset = false,
  children,
  ...rest
}: KeyboardAvoidingProps) {
  const spacing = useHeaderHeight();

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={offset ? spacing : 0}
      {...rest}
    >
      {children}
    </KeyboardAvoidingView>
  );
}
