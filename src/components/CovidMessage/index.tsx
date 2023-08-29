import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

export function CovidMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit debitis
        qui accusantium veniam, ex cupiditate ad earum quis consequuntur
        doloremque assumenda delectus tenetur quo facere, enim distinctio, vitae
        reprehenderit nesciunt?
      </Text>
      <Text style={styles.learnMore}> Learn more </Text>
    </View>
  );
}
