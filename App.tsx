import React, {Component} from 'react';
import {
  createAppContainer,
  NavigationContainerComponent,
} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './src/NavigationService';
import {Item, List} from './src/screens/index';

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
        <RootNavigator
          ref={(navigatorRef: NavigationContainerComponent) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
    );
  }
}
