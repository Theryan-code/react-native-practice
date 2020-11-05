import React, { useState } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    //nama counter gak harus counter serah kok
    const [counter, setCounter] = useState(0);
    
    return (
    <View>
        <Button title="Increase" onPress={()=> {
            setCounter(counter + 1);
            //console.log(counter);
        }}/>
        <Button title="Decrease" onPress={()=> {
            setCounter(counter - 1);
            //console.log(counter);
        }}/>
        <Text> Current Count:</Text>
    </View>);
};

const styles = StyleSheet.create({});

export default CounterScreen;