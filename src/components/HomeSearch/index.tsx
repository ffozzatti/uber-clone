import React from 'react';
import { View, Text } from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign'
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons'
import Entypo  from 'react-native-vector-icons/Entypo'


import { styles } from './styles';

export function HomeSearch() {
  return (
    <View style={styles.container}>
        {/* Input Bux */}
        <View style={styles.inputBox}>
            <Text style={styles.inputText}>Where To?</Text>
            <View style={styles.timeContainer}>
                <AntDesign name="clockcircle" size={16} color={'#535353'}/>
                <Text>Now</Text>
                <MaterialIcons name="keyboard-arrow-down" size={16} />
            </View>
        </View>

        {/* Previous destination */}
        <View style={styles.row}>
            <View style={styles.iconContainer}>
                <AntDesign name='clockcircle' size={20} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Spin Nightclub</Text>
        </View>

        {/* Home destination */}
        <View style={styles.row}>
            <View style={[styles.iconContainer, {backgroundColor: '#218cff'}]}>
                <Entypo name='home' size={20} color={'#fff'} />
            </View>
            <Text style={styles.destinationText}>Home</Text>
        </View>

    </View>
  );
}