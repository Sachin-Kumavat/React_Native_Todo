import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/features/todoSlice';

const About = () => {
  const cartItems = useSelector((state) => state.inputSlice.cartItems);
  const dispatch = useDispatch();
  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <Image source={item.image} style={styles.cartImage} />
        <View style={styles.cartDetails}>
          <Text style={styles.cartTitle}>{item.title}</Text>
          <Text style={styles.cartQuantity}>Quantity: {item.quantity}</Text>
          <View style={styles.cartButtons}>
            <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
              <Text style={styles.cartButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))}>
              <Text style={styles.cartButton}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => dispatch(removeFromCart(item))}
            style={styles.removeButton}
          >
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCartText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCartItem}
        />
      )}
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  emptyCartText: {
    textAlign: 'center',
    fontSize: 18,
    marginTop: 50,
    color: '#7d7d7d',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 10,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cartQuantity: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  cartButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    fontSize: 18,
    color: '#007bff',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 10,
    alignSelf: 'flex-start',
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  removeText: {
    color: '#fff',
    fontSize: 12,
  },
});