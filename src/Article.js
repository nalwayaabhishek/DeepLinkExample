import React from 'react';
import { Text } from 'react-native';

class Article extends React.Component {
  static navigationOptions = {
    title: 'Article',
  };

  render() {
    const { id } = this.props.navigation.state.params;
    return <Text>Hello from Article {id}!</Text>;
  }
}

export default Article;
