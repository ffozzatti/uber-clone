import React from 'react';
import { View, Text, Dimensions } from 'react-native';

import { styles } from './styles';
import { RouteMap } from '../../components/RouteMap';
import { UberTypes } from '../../components/UberTypes';



export function SearchResults() {
  return (
    <View style={styles.container}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
      </View>

      <View style={{height: 400}}>
        <UberTypes />
      </View>

    </View>
  );
}