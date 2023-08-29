/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { DestinationSearch } from './src/screens/DestinationSearch';

function App() {
  return (
    <>
      <StatusBar />
      <DestinationSearch />
    </>
  );
}

export default App;
