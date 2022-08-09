import {Button, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Routes';

const Main: FC<NativeStackScreenProps<RootStackParamList>> = ({navigation}) => {
  return (
    <View>
      <Text>Hello World! This is the main app screen</Text>
      <Button
        title="Settings Screen"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default Main;
