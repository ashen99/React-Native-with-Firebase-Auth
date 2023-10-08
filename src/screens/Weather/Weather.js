import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {weatherData} from '../../services/Services';


const Weather = () => {
  const [weatherForecast, setWeatherForecast] = useState([]);

  //trigger the getWeather function
  useEffect(() => {
    getWeatherData();
  }, []);

  //to get the weather forecast details
  const getWeatherData = async () => {
    const data = await weatherData();
    const modifiedDailyData = data.data.daily.map(dailyItem => {
      return {
        date: formatDate(dailyItem.dt),
        weather: dailyItem.weather[0].main,
      };
    });

    setWeatherForecast(modifiedDailyData);
  };

  // Function to format Unix timestamp to a readable date
  function formatDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleDateString();
  }

  const renderItem = ({item}) => (
    <View style={styles.listContainer}>
      <Text style={{color: 'black', fontWeight: '600'}}>Date: {item.date}</Text>
      <Text style={{color: 'black', fontWeight: '600'}}>
        Weather: {item.weather}
      </Text>
    </View>
  );

  return (
    <View style={styles.Container}>
      <Text style={styles.title}>Weather Forecast</Text>
      <FlatList
        data={weatherForecast}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: 'black',
    fontWeight: '700',
    fontSize: 30,
  },
  listContainer: {
    padding: 10,
    fontWeight: 'bold',
    backgroundColor: '#908cff',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
