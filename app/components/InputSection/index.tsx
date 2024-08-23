import React from 'react';
import {View, TextInput, Button} from 'react-native';
import type {StyleProp, ViewStyle} from 'react-native';
export interface IInputSection {
  style?: StyleProp<ViewStyle>;
}
export const InputSection = (props: IInputSection) => {
  const [textInput, setTextInput] = React.useState<string>('');

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        },
        props.style,
      ]}>
      <TextInput
        style={{minWidth: 120, maxWidth: 150}}
        onChangeText={setTextInput}
      />

      <Button title="Submit" />
    </View>
  );
};
