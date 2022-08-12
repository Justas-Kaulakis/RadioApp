import {Button, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Routes';
import Layout from '../containers/Layout';
import useThemeColors from '../hooks/useThemeColors';

const Main: FC<NativeStackScreenProps<RootStackParamList>> = ({navigation}) => {
  const colors = useThemeColors();
  return (
    <Layout>
      <Text style={{color: colors.primary}}>
        Hello World! This is the main app screen
      </Text>
    </Layout>
  );
};

export default Main;
