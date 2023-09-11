import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import cars from '../../assets/data/cars'
import { CarsDataTypes } from '../../@types/types';


export function HomeMap() {

  const getImage = (type: string) => {
    if (type === 'UberX') {
      return require('../../assets/images/top-UberX.png')
    }
    if (type === 'Comfort') {
      return require('../../assets/images/top-Comfort.png')
    }
    return require('../../assets/images/top-UberXL.png')
  }

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
        {cars.map((car: CarsDataTypes) => (
          <Marker
          key={car.id}
            coordinate={{ latitude: car.latitude, longitude: car.longitude }}
          >
            <Image
              style={styles.markerImage}
              source={getImage(car.type)}
            />

          </Marker>


        ))}

      </MapView>

    </View>
  );
}