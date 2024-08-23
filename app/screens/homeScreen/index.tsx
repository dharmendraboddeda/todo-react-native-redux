import React from 'react';
import {Text, View} from 'react-native';
import {InputSection} from '../../components/InputSection';
import {TodoItem} from '../../components/TodoItem';

const HomeScreen = () => {
  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          paddingBottom: 10,
        }}>
        <Text style={{fontWeight: 'bold'}}>Todo App</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <InputSection
          style={{
            borderRadius: 6,
            justifyContent: 'space-between',
          }}
        />
        <TodoItem title="dfg" />
      </View>
    </View>
  );
};
export default HomeScreen;
