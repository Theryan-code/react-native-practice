import React from 'react';
import { Button } from 'react-native';
import { View, Text, StyleSheet} from 'react-native';


const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    
    return (
    <View>
        <Text>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`} />
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`} />
    </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;