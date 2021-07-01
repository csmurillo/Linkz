import * as React from 'react';
import { View, Text } from 'react-native';
import Entry from './components/Entry';
import Login from './components/Auth/Login';
import LinkzHeader from './components/Main/LinkzHeader';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import History from './components/Main/History';
import Home from './components/Main/Home';
import Send from './components/Main/Send';
import Signup from './components/Auth/Signup';
export default function App() {
  return (
    <SafeAreaProvider>
      {/* <LinkzHeader></LinkzHeader> */}
      {/* <Login></Login> */}
      {/* <Signup></Signup> */}
      <Entry></Entry>
       {/* <History></History> */}
      {/* <Home></Home> */}
      {/* <Send></Send> */}
     </SafeAreaProvider>
  );
}