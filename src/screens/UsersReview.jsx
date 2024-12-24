import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addReview } from '../redux/features/todoSlice';
import Star from '../components/Star';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UsersReview = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("User")

  const reviews = useSelector((state) => state.inputSlice.reviews);
  const getUserName = async () => {
    const userName = await AsyncStorage.getItem("NAME");
    setUserName(userName);
    console.log(userName);
    
  }
  useEffect(() => {
    getUserName()
  }, [userName])

  const handleSubmit = () => {
    console.log("courseName :", courseName, "description", description, "rating", rating);
    if (courseName && description && rating) {
      dispatch(addReview({ courseName, description, rating }));
      setModalVisible(false);
      setCourseName('');
      setDescription('');
      setRating(0);
    } else {
      Alert.alert('Please fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Reviews</Text>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <View key={index} style={styles.reviewCard}>
              <Text style={{ fontSize: 18, color: "#ee4fca" }}>{userName ? userName : "User"}</Text>
              <Text style={styles.reviewTitle}>{review.courseName}</Text>
              <Text style={styles.reviewDescription}>{review.description}</Text>
              <Star startingValue={review.rating} />
            </View>
          ))
        ) : (
          <Text>No reviews yet</Text>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Add Review</Text>
            <TextInput
              style={styles.input}
              placeholder="Course Name"
              value={courseName}
              onChangeText={setCourseName}
            />
            <TextInput
              style={styles.input}
              placeholder="Description"
              value={description}
              onChangeText={setDescription}
              multiline
            />
            <TextInput
              style={styles.input}
              placeholder="Ratings in numbers"
              value={rating}
              onChangeText={setRating}
              multiline
              keyboardType='numeric'
            />
            {/* <Star startingValue={rating} onFinishRating={setRating} /> */}
            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Submit Review</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Review</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewDescription: {
    fontSize: 16,
    marginTop: 5,
  },
  reviewRating: {
    fontSize: 16,
    marginTop: 5,
    color: '#ffa500',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5,
  },
  inputLabel: {
    fontSize: 16,
    marginTop: 10,
  },
  submitButton: {
    backgroundColor: '#2690e8',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#2690e8',
    padding: 15,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    left: '50%',
    // transform: [{ translateX: -75 }],
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default UsersReview;
