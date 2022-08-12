import {StyleSheet, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import Header from './Header';
import Controls from './Controls';
import useThemeColors from '../hooks/useThemeColors';

type LayoutProps = {};

const Layout: FC<PropsWithChildren<LayoutProps>> = ({children}) => {
  const colors = useThemeColors();

  return (
    <View style={[styles.body, {backgroundColor: colors.background}]}>
      <View style={{flex: 1}}>
        <Header />
      </View>
      <View style={{flex: 3}}>{children}</View>
      <View style={{flex: 1}}>
        <Controls />
      </View>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
  },
});
