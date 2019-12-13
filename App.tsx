import React, {Component} from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './src/NavigationService';
import {Item, List} from './src/screens/index';
import {ApolloProvider} from 'react-apollo';
import client from './src/GraphQL';

const AppNavigator = createStackNavigator(
  {
    List,
    Item,
  },
  {
    headerMode: 'none',
  },
);

const RootNavigator = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootNavigator
          ref={(navigatorRef: NavigationContainerComponent) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </ApolloProvider>
    );
  }
}
