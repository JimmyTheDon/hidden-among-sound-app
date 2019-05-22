/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import FullWidthButton from './src/FullWidthButton';

const globalStyles = require('./src/globalstyles');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{marginHorizontal: '7.5%'}}>
          <Text style={globalStyles.title}>Hidden Among Sound</Text>
          <Text style={[globalStyles.body, globalStyles.largeSpace]}>Sound is an intangible and momentary form of communication. It is how we perceive mechanical vibrations in our surrounding, but we are physically limited to a certain range of what we can perceive. Hidden Among Sound is a project the explores sound as a form of cryptographic communication that utilizes frequencies within the upper limits of human hearing, sound frequencies that are hidden and masked by the sounds of our natural everyday environment. It goes unnoticed to all except by those who are the intended receivers. It can be overtly played in the open and covertly hidden within audio files and masked with music or any other form of noise.</Text>
          <FullWidthButton style={globalStyles.mediumSpace} text="Start"></FullWidthButton>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  }
});
