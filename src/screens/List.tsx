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
import Issue from '../components/Issue';

const SEARCH_REPO = gql`
  query {
    repository(owner: "facebook", name: "react-native") {
      issues(last: 100) {
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
          <SafeAreaView style={{flex: 1, padding: 20}}>
            {loading ? <ActivityIndicator /> : null}
            {!loading ? (
              <FlatList
                data={data.repository.issues.edges}
                renderItem={({item}: any) => <Issue item={item.node} />}
              />
            ) : null}
          </SafeAreaView>
        )}
      </Query>
    );
  }
}
