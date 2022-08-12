import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../navigation/Routes';
import useThemeColors from '../hooks/useThemeColors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Settings: FC<NativeStackScreenProps<RootStackParamList>> = ({
  navigation,
}) => {
  const colors = useThemeColors();
  return (
    <View style={[styles.body, {backgroundColor: colors.background}]}>
      <View
        style={[
          {
            flexDirection: 'row',
            padding: 15,
            alignItems: 'center',
            justifyContent: 'space-between',
          },
          styles.darken,
        ]}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" color={colors.primary} size={22} />
        </Pressable>
        <Text
          style={{
            color: colors.primary,
            fontSize: 25,
          }}>
          SETTINGS
        </Text>
      </View>
      <Text style={{color: colors.primary}}>This is the Settings screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
  darken: {
    backgroundColor: '#00000050',
  },
});

export default Settings;
