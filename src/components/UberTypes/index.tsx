import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';
import { UberTypeRow } from '../UberTypeRow';

import uberTypesData from '../../assets/data/uberTypes';
import { TypesDataProps } from '../../@types/types';

export function UberTypes() {

  const confirm = () => {
    console.warn ('confirm')
  }
    
  return (
    <View style={styles.container}>
      {uberTypesData.map((typeItems: TypesDataProps) => (
        <UberTypeRow key={typeItems.id} type = {typeItems}/>
      ))}

      <Pressable style={styles.confirmButton} onPress={confirm}>
        <Text style={styles.textButton}> Confirm Uber</Text>
      </Pressable>

    </View>
  );
}