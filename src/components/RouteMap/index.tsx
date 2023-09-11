import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_KEY } from '../../assets/data/googleKey';



export function RouteMap() {

  const origin = { latitude: 28.450627, longitude: -16.263045 };
  const destination = { latitude: 28.460127, longitude: -16.269045 };


  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 28.450627,
          longitude: -16.263045,
          latitudeDelta: 0.0222,
          longitudeDelta: 0.0121,
        }}
      >
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_KEY}
          strokeWidth={5}
          strokeColor='black'
        />
        <Marker
          coordinate={origin}
          title={'Origin'}
        />
        <Marker
          coordinate={destination}
          title={'Destination'}
        />

      </MapView>

    </View>
  );
}