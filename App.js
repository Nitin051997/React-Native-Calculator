import * as React from 'react';
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import { Provider as StoreProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppDrawer from './Components/Router/AppDrawer';

export default function Main() {

  return (<><StoreProvider>
      <PaperProvider>
        { <AppDrawer/> }
      </PaperProvider>
    </StoreProvider>
    </>);
}

AppRegistry.registerComponent(appName, () => Main);
