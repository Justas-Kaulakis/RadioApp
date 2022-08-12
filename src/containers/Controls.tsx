import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import useThemeColors from '../hooks/useThemeColors';

type ControlProps = {};

const Controls: React.FC<ControlProps> = () => {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, styles.darken]}>
      <Text style={{color: colors.primary}}>CONTROLS</Text>
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darken: {
    backgroundColor: '#00000021',
  },
});
