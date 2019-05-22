import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class FullWidthButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableHighlight style={[styles.defaultButton, this.props.style]} onPress={this.props.onPress} underlayColor='rgba(0,0,0,0.5)' >
                <Text style={styles.defaultButtonLabel}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    defaultButton: {
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#FF00FF'
    },
    defaultButtonLabel: {
        fontFamily: 'SpaceMono-Regular',
        fontSize: 12,
        textAlign: 'center',
        color: '#FF00FF',
    }
});