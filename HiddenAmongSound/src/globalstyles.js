'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

    // Typography Styles
    title: {
        fontFamily: 'SpaceMono-Bold',
        fontSize: 20,
        color: '#FF00FF'
    },
    body: {
        fontFamily: 'SpaceMono-Regular',
        fontSize: 12,
        lineHeight: 20,
        color: '#FF00FF'
    },

    // Spacing
    smallSpace: {
        marginVertical: 5
    },
    mediumSpace: {
        marginVertical: 10
    },
    largeSpace: {
        marginVertical: 20
    }
});