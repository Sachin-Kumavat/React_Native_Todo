import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useRoute } from "@react-navigation/native"
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/todoSlice';
const { width, height } = Dimensions.get('window');

const ProductSummary = () => {
  // const data = route.params;
  const dispatch = useDispatch();
  const route = useRoute();

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: route.params?.item?.image }}
          style={styles.productImage}
          resizeMode="contain"
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{route.params?.item?.title}</Text>
        <Text style={styles.price}>₹{route.params?.item?.price}</Text>
        <Text style={styles.description}>{route.params?.item?.description}</Text>


        <View style={styles.ratingContainer}>
          <Text style={styles.ratingTitle}>Rating: </Text>
          <Text style={styles.ratingValue}>{route.params?.item?.rating.rate} ({route.params?.item?.rating.count} reviews)</Text>
        </View>


        <TouchableOpacity 
          onPress={()=>{
            Alert.alert("Items added successfully")
            dispatch(addToCart(route.params?.item))
            }} style={styles.addToCartButton}>
          <Text style={styles.addToCartText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductSummary;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
  },
  imageContainer: {
    width: '100%',
    height: height * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    paddingHorizontal: width * 0.05,
    paddingBottom: 30,
  },
  title: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: "4%",
  },
  price: {
    fontSize: width * 0.06,
    color: '#ef4d14',
    marginBottom: "2%",
  },
  description: {
    fontSize: width * 0.04,
    color: '#777',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingValue: {
    fontSize: width * 0.05,
    color: '#f39c12',
    marginLeft: 5,
  },
  addToCartButton: {
    backgroundColor: '#ff9900',
    paddingVertical: height * 0.03,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartText: {
    fontSize: width * 0.05,
    color: '#fff',
    fontWeight: 'bold',
  },
});
