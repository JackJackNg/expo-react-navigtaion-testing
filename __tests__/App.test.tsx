// import * as React from 'react';
// import * as renderer from 'react-test-renderer';
// import App from '../App';
// import HomeScreen from '../screens/HomeScreen';

// describe('App', () => {
//   it('snapshot test', () => {
//     const tree = renderer.create(<App skipLoadingScreen={true} />).toJSON;
//     // const tree = renderer.create(<HomeScreen />).toJSON;
//     expect(tree).toMatchSnapshot();
//   });
// });

import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
// @ts-ignore
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';
import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from '../navigation/MainTabNavigator';

describe('App snapshot', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('renders the loading screen', async () => {
    const tree = renderer.create(<MainTabNavigator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  // it('renders the root without loading screen', async () => {
  //   const tree = renderer.create(<App skipLoadingScreen={true} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
});
