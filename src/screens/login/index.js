/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { actions as authActions } from '../../reducers/auth';
import styles from './style';

type Props = {};
class Login extends Component<Props> {
    render() {
        const { auth, dispatch } = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>LOGIN AAEEEEAAAA!</Text>
                <Button title={auth.user} onPress={() => { dispatch(authActions.loginRequest()); }}></Button>
            </View>
        );
    }
}

export default connect((state) => (state))(Login);