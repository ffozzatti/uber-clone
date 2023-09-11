import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { HomeMap } from '../../components/HomeMap';
import { UberTypes } from '../../components/UberTypes';



export function SearchResults() {
  return (
    <View style={styles.container}>
        <HomeMap />
        <UberTypes />
    </View>
  );
}