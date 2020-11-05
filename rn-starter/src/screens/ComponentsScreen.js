import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
const greeting = 'Hi there!';
const greeting2 = ["ABC", "CDE"];
const greeting3 = 123;
const greeting4 = <Text>Hello to you !</Text>;
const name = 'Ryan';

    // return (
    // <View>
    // <Text style={styles.textStyle}> This is the components screen</Text>
    // <Text>{greeting}</Text>
    // {greeting4}
    // </View>
    // );
    return(
        <View>
            <Text style={styles.textStyle}>Getting started with react native!</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;