import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import CourseApi from '../api/CourseApi';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/todoSlice';

const Course = () => {
    const dispatch = useDispatch();
    const courseCard = ({ item }) => {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.courseContainer}>
                    <View style={styles.coursesContainer}>
                        <View>
                            <Image style={styles.courseImage}
                                source={item.image}
                                resizeMethod='contain'
                            />
                        </View>
                        <Text style={styles.mainHeader}>{item.title}</Text>
                        <Text style={styles.cardDesc}>{item.description}</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.buttonStyle}
                                onPress={() => { dispatch(addToCart(item)) }}
                            >
                                <Text style={styles.buttonText}>Buy</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    return (
        <View>
            <FlatList data={CourseApi}
                keyExtractor={(item) => item.id}
                renderItem={courseCard}
            />
        </View>
    )
}

export default Course;

const styles = StyleSheet.create({
    courseContainer: {
        paddingHorizontal: 20,
        borderRadius: 10
    },
    coursesContainer: {
        padding: 30,
        backgroundColor: "rgba(255, 255, 255, 0.90)",
        textAlign: "center",
        borderRadius: 10,
        shadowColor: "grey",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
        marginVertical: 30
    },
    courseImage: {
        width: "100%",
        height: "auto",
        aspectRatio: 1,
        borderRadius: 10
    },
    mainHeader: {
        fontSize: 22,
        color: "#344055",
        textTransform: "uppercase",
        fontWeight: 500,
        paddingTop: 15,
        paddingBottom: 15,
        textAlign: "center"
    },
    cardDesc: {
        textAlign: "left",
        paddingBottom: 15,
        lineHeight: 20,
        fontSize: 15,
        color: "#7d7d7d"
    },
    buttonContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    buttonStyle: {
        backgroundColor: "#809fff",
        paddingVertical: 10,
        paddingHorizontal: 18,
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 20,
        color: "#eee",
        textTransform: "capitalize"
    }
})