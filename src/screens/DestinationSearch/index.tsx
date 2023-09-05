import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView } from 'react-native';
import { GooglePlacesAutocomplete, GooglePlaceData, GooglePlaceDetail } from 'react-native-google-places-autocomplete';
import { GOOGLE_KEY } from './googleKey';


import { styles } from './styles';

export function DestinationSearch() {

    const [originPlace, setOriginPlace] = useState<GooglePlaceData | null>(null)
    const [destinationPlace, setDestinationPlace] = useState<GooglePlaceData | null>(null)

    useEffect (() => {
        if (originPlace && destinationPlace) {
            console.warn ('Redirect to results')
        }

    },[originPlace, destinationPlace])   

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <GooglePlacesAutocomplete
                    placeholder='Where from?'
                    onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        //@ts-ignore
                        setOriginPlace({ data, details })
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: GOOGLE_KEY,
                        language: 'pt',
                    }}
                />

                <GooglePlacesAutocomplete
                    placeholder='Where to?'
                    onPress={(data: GooglePlaceData, details: GooglePlaceDetail | null = null) => {
                        //@ts-ignore
                        setDestinationPlace({ data, details })
                    }}
                    styles={{
                        textInput: styles.textInput
                    }}
                    query={{
                        key: GOOGLE_KEY,
                        language: 'pt',
                    }}
                />
            </View>
        </SafeAreaView>
    );
}