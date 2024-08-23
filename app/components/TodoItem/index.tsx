import React from 'react';
import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {CheckBox} from '@rneui/base';
import type {StyleProp} from 'react-native';

export interface ITodoItem {
  title: string;
  description?: string | undefined;
  style?: StyleProp<ViewStyle>;
  onToggle?: () => void;
  onDelete?: () => void;
}

export const TodoItem = ({
  title,
  description,
  onToggle,
  onDelete,
  ...props
}: ITodoItem) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      {/* <CheckBox checked /> */}
      <View style={{flex: 1, marginLeft: 8}}>
        <Text>{title}</Text>
        {description && <Text>{description}</Text>}
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};
