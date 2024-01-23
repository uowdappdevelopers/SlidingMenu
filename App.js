import { StyleSheet, Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes/routes.js';

export default function App() {
  return (
    <NavigationContainer>
      <Routes></Routes>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
