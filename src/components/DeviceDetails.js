import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const DeviceDetails = ({ item }) => {
  // extracting objects from json item. names must match
  const { NAME, VALUE, THUMB } = item;
  const {
    thumbnailStyle,
    headerContentStyle,
    thumbnailContainerStyle,
    headerTextStyle,
    valueTextStyle,
    boxTextStyle,
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            style={thumbnailStyle}
            source={{ uri: THUMB }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{NAME}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Text style={boxTextStyle}>
          This section will provide more details about the sensor
        </Text>
      </CardSection>
      <CardSection>
      <Text style={valueTextStyle}>{VALUE}</Text>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 20,
    color: '#000000'
  },
  valueTextStyle: {
    fontSize: 16,
    color: '#FF5733'
  },
  boxTextStyle: {
    fontSize: 16,
    color: '#000000'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default DeviceDetails;
