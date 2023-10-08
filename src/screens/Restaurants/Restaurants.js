import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {weatherData} from '../../services/Services';

const Restaurants = () => {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    getRestaurantsData();
  }, []);

  //to get the nearby restaurants in the google map
  const getRestaurantsData = async () => {
    const data = await weatherData();

    const staticData = data.data.results.map(result => ({
      coordinates: {
        latitude: result.geometry.location.lat,
        longitude: result.geometry.location.lng,
      },
    }));
    setResturants(staticData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NearBy Resturants</Text>
      <MapView
        style={{flex: 0.8}}
        initialRegion={{
          latitude: -33.8670522,
          longitude: 151.195736,
          latitudeDelta: 0.015922,
          longitudeDelta: 0.015421,
        }}>
        {resturants.length > 0 &&
          resturants.map((item, index) => (
            <Marker
              key={index}
              title="Resturant"
              coordinate={item.coordinates}
            />
          ))}
      </MapView>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 30,
  },
});
