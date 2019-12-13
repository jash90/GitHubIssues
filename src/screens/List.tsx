import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
interface State {
  list: any;
}

export default class List extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {}

  render() {
    return (
          <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
            {loading ? <ActivityIndicator /> : null}
            {!loading ? (
              <FlatList
                data={data.repository.issues.edges}
                renderItem={({item}: any) => (
                  <View>
                    <Text>{item.node.title}</Text>
                  </View>
                )}
              />
            ) : null}
          </SafeAreaView>
    );
  }
}
