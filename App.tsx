import React from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,

} from 'react-native';
import { NativeModules } from 'react-native';

const {ForegroundService} = NativeModules;

function App(): JSX.Element {
  const handleStartService = async () => {
    try {
      await ForegroundService.startForegroundService();
      console.log('Foreground service started successfully');
    } catch (error) {
      console.error('Error starting foreground service:', error);
    }
  };

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Button title="Start foreground service" onPress={handleStartService} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;