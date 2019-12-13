import { NavigationActions, StackActions } from 'react-navigation';
import { NavigationContainerComponent, NavigationRoute, NavigationScreenProp } from 'react-navigation';
import {Screen} from './Screens';

export default class NavigationService {
  static navigator: NavigationContainerComponent|any;

  public static setTopLevelNavigator(navigatorRef: NavigationContainerComponent) {
    this.navigator = navigatorRef;
  }

  public static navigate(routeName: Screen, params: any | null = null) {
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params,
      })
    );
  }

  public static goBack() {
    this.navigator.dispatch(
      NavigationActions.back()
    );
  }

  public static reset(routeName:Screen) {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    });
    this.navigator.dispatch(
     resetAction
    );
  }

}