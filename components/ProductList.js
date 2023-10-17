import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import QuantitySelector from './QuantitySelector';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);

    const [cartValue, setCartValue] = useState(0);

    const handleIncrement = () => {
        setCartValue(cartValue + 1);
    };

    const handleDecrement = () => {
        if (cartValue > 0) {
            setCartValue(cartValue - 1);
        }
    };

    return (
        <ScrollView>
            <View>
                <Text>Cart Value: {cartValue}</Text>
            </View>
            {products.map((item, index) => (
                <View key={item.id} style={styles.productItem}>
                    <Text style={styles.index}>{index + 1}</Text>
                    <View style={styles.productInfo}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.price}>${item.price}</Text>
                        <QuantitySelector />
                    </View>
                    <Image source={{ uri: item.image }} style={styles.productImage} />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    productItem: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingLeft: 10,
        backgroundColor: '#d3d3d3',
        justifyContent: 'space-between',
    },
    index: {
        fontSize: 16,
        marginRight: 10,
        padding: 10,


    },
    productInfo: {

    },
    productImage: {
        width: 100,
        height: 120,
        resizeMode: 'cover',
        alignItems: 'flex-end',

    },

    title: {
        fontSize: 16,
        padding: 10,
        width: 230
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingBottom: 10
    },
});

export default ProductList;

