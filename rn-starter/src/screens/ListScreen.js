import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () =>{
    // method 1 to define key
    // const friends = [
    //     { name: 'Friend #1' , key: '1'},    
    //     { name: 'Friend #2' , key: '2'},    
    //     { name: 'Friend #3' , key: '3'},    
    // ];
    //method 2 to define key can use name as a key because the name is unique
    //key extractor to define the name as key
    const friends = [
        { name: 'Friend #1', age: 20 },    
        { name: 'Friend #2', age: 21},    
        { name: 'Friend #3', age: 22},    
    ];
    //horizontal buat list ke kanan drpd kebawah
    //show horizontal itu biar gak kelihatan scroll bar
    return (
    <FlatList
    horizontal 
    showsHorizontalScrollIndicator = {false}
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({ item }) => {
        // element == {item: {name: 'friend #1'}, index: 0}
        // kalau item cuma {name : 'friend #1'} doang
    return <Text style={styles.textStyle}> {item.name} - Age {item.age} </Text>
    }} 
    />
    );
    // return <Text>List Screen</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;