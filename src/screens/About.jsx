import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Button } from 'react-native';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/features/todoSlice';
const { width, height } = Dimensions.get("window")
const About = () => {
  const cartItems = useSelector((state) => state.inputSlice.cartItems);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity),0).toFixed(2);


  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Image resizeMode='contain' source={{ uri: item?.image }} style={styles.cartImage} />
          <View style={{ display: "flex", flexDirection: "row" }}>
            <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
              <Text style={styles.cartButton}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))}>
              <Text style={styles.cartButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.cartDetails}>
          <Text style={styles.cartTitle}>{item.title}</Text>
          <Text style={styles.itemPrice}>₹{item.price}</Text>
          <Text style={styles.cartQuantity}>Quantity: {item.quantity}</Text>
          {/* <TouchableOpacity onPress={() => dispatch(decrementQuantity(item))}>
            <Text style={styles.cartButton}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(incrementQuantity(item))}>
            <Text style={styles.cartButton}>+</Text>
          </TouchableOpacity>
          <View style={styles.cartButtons}>
          </View> */}
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
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderCartItem}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.totalPriceContainer}>
            <View style={styles.totalPrice}>
              <Text style={styles.totalPriceLabel}>Total Price</Text>
              <Text style={styles.totalPriceValue}>₹{totalPrice}</Text>

            </View>
            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyButtonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  )
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "7%",
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
    elevation: 7,
    height: height * 0.27,
    position: 'relative'
  },
  cartImage: {
    width: width * 0.18,
    height: height * 0.17,
    borderRadius: 5,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 10,
    gap: height * 0.01,
    // justifyContent: 'space-between'
  },
  cartTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    color: "#3d3c39",
    fontSize: width * 0.05
  },
  cartQuantity: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
    position: 'absolute',
    bottom: "30%"
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
    backgroundColor: "#e3e2e2",
    borderRadius: 10,
    marginHorizontal: 5
  },
  removeButton: {
    // marginTop: height * 0.003,
    alignSelf: 'flex-start',
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
    position: 'absolute',
    bottom: 10
  },
  removeText: {
    color: '#fff',
    fontSize: width * 0.04,
  },


  //Total Price Section
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#4CAF50",
    borderRadius: 10,
    // padding: 15,
    alignItems: "center",
    width: "100%",
    
  },
  totalPrice: {
    backgroundColor: "#f5f3f0",
    width: "52%",
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderColor: "#e1ddd9",
    borderWidth: 1,
    borderRadius: 10
    // paddingHorizontal: "7%"
  },
  totalPriceLabel: {
    fontSize: 15,
    color: "#5e5951",
    // fontWeight: 'bold',
    // marginRight: 10
    marginHorizontal: "5%"
  },
  totalPriceValue: {
    fontSize: 15,
    color: '#5e5951',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: '#1d8007',
    paddingVertical: "3%",
    paddingHorizontal: "7%",
    borderRadius: 5,
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});