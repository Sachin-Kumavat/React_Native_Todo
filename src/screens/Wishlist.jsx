import { View, Text, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'
const { width, height } = Dimensions.get('window');
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWishlist, addToCart } from '../redux/features/todoSlice';

const Wishlist = () => {
    const dispatch = useDispatch()
    const wishlistItems = useSelector((state) => state.inputSlice.wishListItems);

    const renderWishlistItems = ({ item }) => {
        return (
            <View style={styles.listItems}>
                <View style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <Image resizeMode='contain' source={{ uri: item?.image }} style={styles.listImage} />
                </View>
                <View style={styles.listDetails}>
                    <Text style={styles.listItemTitle}>{item.title}</Text>
                    <Text style={styles.listItemPrice}>₹{item.price}</Text>
                    <View style={{ display: "flex", flexDirection: "row", position: "absolute", bottom: 4, width: "100%", justifyContent: "space-between", paddingHorizontal: "30%" }}>
                        <TouchableOpacity
                            onPress={() => {
                                Alert.alert("Items added successfully")
                                dispatch(addToCart(item))
                            }} style={styles.addToCartPageButton}>
                            <Text style={styles.addToCartPageText}>Add to Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.removeListItems}
                            onPress={() => dispatch(removeFromWishlist(item))}
                        >
                            <Text style={styles.removeListText} >Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }




    return (
        <View style={styles.wishlistContainer}>
            {
                wishlistItems.length === 0 ? (
                    <Text style={styles.emptyWishlist}>Wishlist is empty</Text>
                ) : (

                    <FlatList
                        data={wishlistItems}
                        keyExtractor={(item) => item.id}
                        renderItem={renderWishlistItems}
                    />
                )
            }
        </View>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    wishlistContainer: {
        flex: 1,
        padding: "4%",
        backgroundColor: '#f8f8f8'
    },
    emptyWishlist: {
        fontSize: 17,
        textAlign: 'center',
        color: "#7d7d7d"
    },
    listItems: {
        flexDirection: 'row',
        marginBottom: "3%",
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: "3%",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        // shadowRadius: 80,
        elevation: 7,
        height: height * 0.20,
        position: "relative"
    },
    listImage: {
        width: width * 0.18,
        height: height * 0.17,
        // borderRa dius: 5,
    },
    listDetails: {
        flex: 1,
        marginLeft: 10,
        gap: height * 0.01
    },
    listItemTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#333',
    },
    listItemPrice: {
        color: "#3d3c39",
        fontSize: width * 0.04
    },
    removeListItems: {
        alignSelf: 'flex-start',
        backgroundColor: '#ff4d4d',
        padding: 5,
        borderRadius: 5,
        position: 'absolute',
        bottom: 10
    },
    removeListText: {
        color: '#fff',
        fontSize: width * 0.04,
    },
    addToCartPageButton: {
        alignSelf: 'flex-start',
        backgroundColor: '#ef9113',
        padding: 5,
        borderRadius: 5,
        // position: 'absolute',
        bottom: 10,
    },
    addToCartPageText: {
        color: '#fff',
        fontSize: width * 0.04,
    }


})