import React, { useState } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


import { styles } from './styles';

export function DestinationSearch() {

    const [fromText, setFromText] = useState('')
    const [destinationText, setDestinationText] = useState('')

    //console.log(fromText, destinationText)

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    placeholder='From'
                    value={fromText}
                    onChangeText={setFromText}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Where to?'
                    value={destinationText}
                    onChangeText={setDestinationText}
                />
                <GooglePlacesAutocomplete
                    placeholder='Search'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyDE7iVuutva3TXaMWk1NNeD8OvRYATo3do',
                        language: 'pt',
                    }}
                />
            </View>
        </SafeAreaView>
    );
}