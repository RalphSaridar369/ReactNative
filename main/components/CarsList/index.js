import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList } from 'react-native';
import styles from './styles';
import cars from './cars.js';
import CarItem from '../CarItem';

const CarsList = (props) =>{

    return(
        <View style={styles.container}>
            <FlatList  data={cars} renderItem={({item})=>
                <CarItem car={item} />
            }/>
        </View>
    )


}

export default CarsList;