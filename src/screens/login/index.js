/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import styles from './style';

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>LOGIN AAEEEEAAAA!</Text>
                <Button title='Log me IN !' onPress={() => { }}></Button>
            </View>
        );
    }
}
