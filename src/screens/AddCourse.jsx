import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import CourseApi from '../api/CourseApi';

const AddCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [courseImg, setCourseImg] = useState(null);
  const [ratings, setRatings] = useState(null);

  return (
    <View>
      <View>
        <View>
          <Text>Course Name</Text>
          <TextInput onChangeText={(e) => setCourseName(e)} />
        </View>
        <View>
          <Text>Course Description</Text>
          <TextInput onChangeText={(e) => setCourseName(e)} />
        </View>
        <View>
          <Text>Course Image</Text>
          <TextInput onChangeText={(e) => setCourseName(e)} />
        </View>
      </View>
    </View>
  )
}

export default AddCourse