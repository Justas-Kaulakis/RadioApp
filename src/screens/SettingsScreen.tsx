import {Button, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Routes';
import Layout from '../containers/Layout';
import useThemeColors from '../hooks/useThemeColors';

const Settings: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const colors = useThemeColors();
  return (
    <Layout>
      <Text style={{color: colors.primary}}>SETTINGS</Text>
      <Button
        title="Go back to main!"
        onPress={() => navigation.navigate('Main')}
      />
    </Layout>
  );
};

export default Settings;
