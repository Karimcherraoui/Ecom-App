import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './app/Navigation/RootNavigation';
import { useMemo } from 'react';
import "react-native-gesture-handler"
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const theme: Theme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: '#f5f5f5',
        text: '#191919',
        border: '#D9D9D9',
        primary: '#191919',
      },
    }),
    [],
  );
  return (
    <GestureHandlerRootView style={styles.container}>
     <NavigationContainer theme={theme}>
      <RootNavigation />
      <StatusBar style="dark" />
     </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
});
