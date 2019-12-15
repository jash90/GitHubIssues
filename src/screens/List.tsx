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

interface State {
  list: any;
  after: any;
}
const GET_ISSUES = gql`
  query($after: String) {
    repository(owner: "facebook", name: "react-native") {
      issues(
        first: 100
        after: $after
        orderBy: {field: CREATED_AT, direction: DESC}
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          node {
            id
            title
            url
            createdAt
            closed
            labels(first: 3) {
              edges {
                node {
                  id
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

export default class List extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      list: [],
      after: null,
    };
  }

  componentDidMount() {}

  fetch = (cursor: any, listss: any) => {
    console.log({cursor, listss});
    if (cursor) {
      this.setState({list: [...this.state.list, ...listss], after: cursor});
    }
  };

  onViewableItemsChanged = (info: any) => {
    console.log(info);
  };

  render() {
    return (
      <Query query={GET_ISSUES} variables={{after: this.state.after}}>
        {({loading, error, data, fetchMore}: any) => {
          return (
            <SafeAreaView style={{flex: 1, padding: 20}}>
              {loading ? <ActivityIndicator /> : null}
              {!loading ? (
                <FlatList
                  data={data.repository.issues.edges}
                  renderItem={({item}: any) => <Issue item={item.node} />}
                  onEndReached={() =>
                    this.fetch(
                      data.repository.issues.pageInfo.endCursor,
                      data.repository.issues.edges,
                    )
                  }
                />
              ) : null}
            </SafeAreaView>
          );
        }}
      </Query>
    );
  }
}
