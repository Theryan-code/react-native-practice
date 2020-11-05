import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


const ImageDetail = ({ imageSource, title, score}) => {
    //biar lebih kode efisien props diganti mbek yang mau dipanggil
    // kalau mau balik keprops ganti aja setelah = jadi props
    // console.log(props);
    return <View>
            <Image source={imageSource}/>
            <Text>{title}</Text>
            <Text>Image Score - {score}</Text>
        </View>
};

const styles = StyleSheet.create({});

export default ImageDetail;
