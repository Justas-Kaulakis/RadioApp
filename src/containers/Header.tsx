import {
  Image,
  StyleSheet,
  Text,
  TextStyle,
  View,
  Pressable,
} from 'react-native';
import React from 'react';
import useThemeColors from '../hooks/useThemeColors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {MainScreenNavigationProp} from '../navigation/Routes';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const colors = useThemeColors();
  const navigation = useNavigation<MainScreenNavigationProp>();
  const navStyle: TextStyle[] = StyleSheet.create([
    {color: colors.primary},
    styles.navText,
  ]);

  return (
    <View style={styles.container}>
      <Pressable
        style={{position: 'absolute', top: 20, left: 20}}
        onPress={() => navigation.navigate('Settings')}>
        <Icon name="gear" color={colors.primary} size={25} />
      </Pressable>
      <View style={styles.headerTop}>
        <Image
          style={{height: 80, width: 64}}
          source={require('../assets/app-icon.png')}
        />
      </View>
      <View style={styles.nav}>
        <Text style={navStyle}>Stations</Text>
        <Text style={navStyle}>Saved</Text>
        <Text style={navStyle}>Local</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nav: {
    flexDirection: 'row',
    padding: 4,
    justifyContent: 'space-around',
  },
  navText: {
    fontSize: 20,
  },
});
