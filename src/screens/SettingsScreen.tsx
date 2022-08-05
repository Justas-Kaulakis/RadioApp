import {Button, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Routes';

const Settings: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  return (
    <View>
      <Text>SETTINGS</Text>
      <Button
        title="Go back to main!"
        onPress={() => navigation.navigate('Main')}
      />
    </View>
  );
};

export default Settings;
