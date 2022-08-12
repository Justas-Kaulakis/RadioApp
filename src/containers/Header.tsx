import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import useThemeColors from '../hooks/useThemeColors';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const colors = useThemeColors();
  return (
    <View style={[styles.container, styles.darken]}>
      <Text style={{color: colors.primary}}>Header</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darken: {
    backgroundColor: '#00000050',
  },
});
