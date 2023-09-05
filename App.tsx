/* eslint-disable prettier/prettier */
import React from 'react';
import { StatusBar } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen';
import { DestinationSearch } from './src/screens/DestinationSearch';
import { SearchResults } from './src/screens/SearchResults';

function App() {
  return (
    <>
      <StatusBar />
      <SearchResults />
    </>
  );
}

export default App;
