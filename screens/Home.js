import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';
import { Icon, IconElement } from '@ui-kitten/components';


export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text>Shop from our section below!</Text>     
            </View>
            <View>
                <ProductList />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    top: {
        padding: 30,
        marginTop: 100
    }

});
