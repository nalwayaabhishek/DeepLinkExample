import React from 'react';
import { Text } from 'react-native';

class Home extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return <Text>Hello from Home!</Text>;
  }
}

export default Home;
