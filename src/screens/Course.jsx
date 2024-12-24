import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, addToWishlist} from '../redux/features/todoSlice';
import Star from '../components/Star';
import {useNavigation} from '@react-navigation/native';
import {RadioButton} from 'react-native-paper';
const {WIDTH, HEIGHT} = Dimensions.get('window');

const Course = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cartItemsRedux = useSelector(state => state.inputSlice.cartCount);
  console.log('Length of cartIems array--->', cartItemsRedux);
  const [filteredCards, setFilteredCards] = useState(cardsData);
  const [cardsData, setCardsData] = useState([]);
  const [loadingImage, setLoadingImage] = useState({});
  const [isPageLoading, setIsPageLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('');

  // const filterCard = () => {
  //     const newCards = [...filteredCards].sort((a, b) => b.ratings - a.ratings);
  //     setFilteredCards(newCards);
  // }

  const fetchingData = async () => {
    setIsPageLoading(true);
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setCardsData(data);
    setIsPageLoading(false);
  };

  useEffect(() => {
    fetchingData();
  }, []);

  useEffect(() => {
    console.log('Cards Data : ', cardsData);
  }, [cardsData]);

  useEffect(() => {
    setFilteredCards(cardsData);
  }, [cardsData]);

  // useEffect(() => {
  //     console.log("Filtered Cards Length: ", filteredCards);
  // }, [filteredCards]);

  // const handleImageLoadStart = (id) => {
  //     setLoadingImage((prev) => ({
  //         ...prev,
  //         [id]: true,
  //     }))
  // }

  // const handleImageLoadEnd = (id) => {
  //     setLoadingImage((prev) => ({
  //         ...prev,
  //         [id]: false,
  //     }))
  // }

  const filterCards = query => {
    setSearchQuery(query);
    const filteredData = cardsData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()),
    );

    setFilteredCards(filteredData);
  };

  // Sorting function based on selected filter
  const handleFilter = () => {
    console.log('filterOption--->', checked);
    let sortedCards = [...filteredCards];
    console.log('sortedCards--->', sortedCards);
    switch (checked) {
      case 'priceLowToHigh':
        sortedCards = sortedCards.sort((a, b) => a.price - b.price);
        console.log('Updated cards --->', sortedCards);
        break;
      case 'priceHighToLow':
        sortedCards = sortedCards.sort((a, b) => b.price - a.price);
        break;
      case 'ratings':
        sortedCards = sortedCards.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
      default:
        break;
    }
    setFilteredCards(sortedCards);
    setModalVisible(false); // Close the modal after filtering
  };

  const courseCard = ({item}) => {
    // const isLoading = loadingImage[item.id]
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductSummary', {item});
        }}>
        <View style={styles.courseContainer}>
          <View style={styles.coursesContainer}>
            
              <Image
                style={styles.courseImage}
                source={{uri: item?.image}}
                resizeMode='contain'
              />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.mainHeader}>
              {item.title}
            </Text>
            <Star startingValue={item.rating.rate} />
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={styles.cardDesc}>
              {item.description}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginHorizontal: '3%',
              }}>
              <Text style={styles.priceBtn}>₹{item.price}</Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#f7efef',
                padding: '3%',
                borderRadius: '50%',
                position: 'absolute',
                top: 10, // Position it 10% from the top of the container
                right: 10,
                zIndex: 1,
              }}
              onPress={() => dispatch(addToWishlist(item))}>
              <Image
                style={styles.wishList}
                source={require('../../assets/wishlist.png')}
              />
            </TouchableOpacity>
            <Text style={styles.countStock}>
              Only {item.rating.count} left in stock.
            </Text>
            {/* <View style={styles.buttonContainer}>productSummaryContain
                        <TouchableOpacity style={styles.buttonStyle}
                            onPress={() => { dispatch(addToCart(item)) }}
                        >
                            <Text style={styles.buttonText}>Add To Cart</Text>
                        </TouchableOpacity>
                    </View> */}
            {/* <TouchableOpacity onPress={() => { navigation.navigate("CourseSummary") }} style={{ backgroundColor: "#ed4126", width: "40%", height: "100%", }}>
                            <Text style={{ color: "white", fontSize: 10 }}>Course Summary</Text>
                        </TouchableOpacity> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.productHeader}>
        {/* Header Upper */}
        <View style={styles.headerUpper}>
          <View style={styles.headerInput}>
            <Image
              source={require('../../assets/search.png')}
              style={styles.searchIcon}
            />
            <TextInput
              style={styles.inputBar}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={filterCards}
            />
          </View>
          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
              <Image
                style={styles.icon}
                source={require('../../assets/heart.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
                style={styles.icon}
                source={require('../../assets/cart2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Header Lower */}
        {/* <View style={styles.headerLower}>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('priceLowToHigh')}>
                        <Text style={styles.filterText}>Price: Low to High</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('priceHighToLow')}>
                        <Text style={styles.filterText}>Price: High to Low</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('ratings')}>
                        <Text style={styles.filterText}>Ratings</Text>
                    </TouchableOpacity>
                </View> */}
      </View>

      <View style={styles.headerLower}>
        <TouchableOpacity
          style={styles.filterTextContainer}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: '#333', fontSize: 14}}>Sort by</Text>
          <Image
            style={styles.arrowIcon}
            source={require('../../assets/down-arrow.png')}
          />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#e3dede',
            backgroundColor: '#f9f9f9',
            padding: '2%',
            borderRadius: 10,
          }}>
          <Text style={{color: '#6c6969', fontSize: 15}}>
            Items Added{' '}
            <Text style={{color: '#46abde', fontSize: 17}}>
              {cartItemsRedux}
            </Text>
          </Text>
        </View>
      </View>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by:</Text>

            <RadioButton.Group
              onValueChange={newValue => setChecked(newValue)}
              value={checked}>
              <View style={styles.filterOption}>
                <Text style={styles.filterText}>Price: Low to High</Text>
                <RadioButton value="priceLowToHigh" />
              </View>
              <View style={styles.filterOption}>
                <Text style={styles.filterText}>Price: High to Low</Text>
                <RadioButton value="priceHighToLow" />
              </View>
              <View style={styles.filterOption}>
                <Text style={styles.filterText}>Ratings</Text>
                <RadioButton value="ratings" />
              </View>
            </RadioButton.Group>

            <TouchableOpacity style={styles.applyButton} onPress={handleFilter}>
              <Text style={styles.applyButtonText}>Apply Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {isPageLoading ? (
        <View style={styles.loadingContainer}>
          {/* <Image
                            source={require("../../assets/Spinner_Loader.gif")}
                            style={styles.loader}
                            resizeMode="contain"
                        /> */}
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : filteredCards.length === 0 ? (
        <Text style={styles.noSearchItems}>No result for searched item.</Text>
      ) : (
        <FlatList
          data={filteredCards}
          keyExtractor={item => item.id}
          renderItem={courseCard}
        />
      )}
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({
  productHeader: {
    width: '100%',
    backgroundColor: '#f8f8f8',
    paddingTop: '5%',
    paddingBottom: '2%',
  },
  headerUpper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    height: HEIGHT * 0.1,
  },
  headerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: '3%',
    width: '70%',
    height: '90%',
    elevation: 5,
    // paddingBottom: 2
    padding: '2%',
  },
  searchIcon: {
    width: '7%',
    height: '100%',
    marginRight: '3%',
  },
  inputBar: {
    width: '90%',
    height: '100%',
    fontSize: 16,
    paddingVertical: 0,
    fontSize: 14,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: '5%',
  },

  // Header Lower Styles
  headerLower: {
    paddingVertical: '2%',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  filterTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#e3dede',
    borderWidth: 1,
    padding: '1.4%',
    paddingHorizontal: '2.5%',
    borderRadius: 6,
  },
  filterText: {
    fontSize: 15,
    color: '#333',
  },
  arrowIcon: {
    width: 12,
    height: 12,
    marginLeft: 10,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  filterText: {
    fontSize: 16,
    marginRight: 10,
    width: '80%',
  },
  applyButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#ea513b',
    padding: '4%',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#f9f9f9',
    fontSize: 16,
  },

  // Product Container
  courseContainer: {
    // display: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    position: 'relative',
    // width: "100%"
  },
  coursesContainer: {
    // display: 1,
    // width: "100%",
    padding: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    textAlign: 'center',
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
    marginVertical: 10,
  },
  courseImage: {
  alignItems: 'center',
    height: 200,
    borderRadius: 5,
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: 500,
    paddingTop: '3%',
    paddingBottom: 15,
    textAlign: 'center',
  },
  cardDesc: {
    textAlign: 'left',
    paddingBottom: 15,
    lineHeight: 20,
    fontSize: 15,
    color: '#7d7d7d',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#f3c72e',
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 17,
    color: '#3f3f32',
    textTransform: 'capitalize',
  },
  priceBtn: {
    fontSize: 20,
    color: '#504d40',
  },
  countStock: {
    color: '#ef4d14',
    fontSize: 15,
    paddingTop: 5,
    textAlign: 'center',
  },
  productSummaryContain: {},
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loader: {
    width: 100,
    height: 100,
  },
  wishList: {
    width: 30,
    height: 30,
    borderRadius: 5,
    resizeMode: 'contain',
  },
  noSearchItems: {
    textAlign: 'center',
    color: '#7d7d7d',
    fontSize: 16,
    marginTop: '5%',
  },
});
