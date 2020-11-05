import React from "react";
import { Text, StyleSheet , View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  //({ navigation }) 
  // isa diganti mbek propr biat punya akses semua function props
  //console.log(props);
  //buat tahu function
  //touchable opcaity itu lek mau button function aneh
  //button itu lek mau button biasa

  return (
  <View> 
    <Text style={styles.text}>Hi There</Text>
    <Button 
    onPress={() => navigation.navigate('Components')}
    title = "Go to Components Demo"
    />
    <Button
      title="Go to List Demo"
      onPress={() => navigation.navigate('List')}
    />
    <Button
      title="Go to Image Demo"
      onPress={() => navigation.navigate('Image')}
    />
    <Button
      title="Go to Counter Demo"
      onPress={() => navigation.navigate('Counter')}
    />
    <Button
      title="Go to Color Demo"
      onPress={() => navigation.navigate('Color')}
    />
    <Button
      title="Go to Square Demo"
      onPress={() => navigation.navigate('Square')}
    />
    {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
      <Text>
        Go to List Demo
      </Text>
    </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
