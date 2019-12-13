import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const SEARCH_REPO = gql`
  query {
    repository(owner: "facebook", name: "react-native") {
      issues(first: 100) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            title
            url
            createdAt
            closed
            labels(first: 3) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

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
      <Query query={SEARCH_REPO}>
        {({loading, error, data, refetch}: any) => (
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
        )}
      </Query>
    );
  }
}
