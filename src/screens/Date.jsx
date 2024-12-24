import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
const {width, height} = Dimensions.get("window")

LocaleConfig.locales['custom'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
  dayNamesShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  firstDay: 1,
};
LocaleConfig.defaultLocale = 'custom';

const Arrow = ({direction}) => {
  const arrowSource =
    direction === 'left'
      ? require('../../assets/leftArrow.png')
      : require('../../assets/rightArrow.png');
  return <Image style={styles.arrowStyle} source={arrowSource} />;
};

const Date = () => {
  return (
    <View style={styles.calendarContainer}>
      <View style={styles.calHeader}>
        <Text style={{color: '#6e7171', fontSize: 18}}>
          Attendance register
        </Text>
      </View>
      <View style={styles.calMainContain}>
        <Calendar
          style={
            {
              // borderWidth: 1,
              // borderColor: 'red',
              // height: 350,
              // marginTop: '5%',
            }
          }
          current={'2024-12-23'}
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // hideArrows={true}
          renderArrow={direction => <Arrow direction={direction} />}
          markedDates={{
            '2024-12-09': {
              selected: true,
              marked: true,
              dotColor: 'red',
              selectedColor: '#b9eee1',
              customStyles: {
                container: {
                  // borderWidth: 1,
                  borderColor: 'red',
                  height: 38,
                  // borderRadius: 20,
                  justifyContent: 'center',
                },
                text: {
                  color: 'black',
                },
              },
            },
            '2024-12-02': {marked: true, dotColor: 'red'},
            '2024-12-11': {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: '#e7e7e7',
                  height: 38,
                  // alignItems: 'center',
                  justifyContent: 'center',
                },
                text: {
                  color: 'black',
                },
              },
            },
            '2024-12-27': {
              selected: true,
              marked: true,
              dotColor: 'red',
              selectedColor: '#b9eee1',
              customStyles: {
                container: {
                  // borderWidth: 1,
                  borderColor: 'blue',
                  height: 38,
                  // borderRadius: 20,
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                },
                text: {
                  color: 'black',
                },
              },
            },
          }}

          markingType={'custom'}
          theme={
            {
              // backgroundColor: 'red',
              // backgroundColor: 'red',
              // calendarBackground: "green"
              // calendarBackground: '#ffffff',
              // textSectionTitleColor: '#6e7171',
              // selectedDayBackgroundColor: '#5267ee',
              // selectedDayTextColor: '#ffffff',
              // dayTextColor: '#2d4150',
              // textDisabledColor: '#d9e1e8',
              // dotColor: 'red',
              // // arrowColor: '#5267ee',
              // monthTextColor: 'green',
              // textDayFontSize: 16,
              // textMonthFontSize: 18,
              // textMonthFontWeight: 'bold',

              textDayStyle: {
                padding: 60,
                backgroundColor: "red"
              }

            }
          }
        />
      </View>
    </View>
  );
};

export default Date;

const styles = StyleSheet.create({
  calendarContainer: {
    width: '100%',
    padding: '5%',
    height: '100%',
    backgroundColor: '#fdffff',
  },
  customHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#6e7171',
  },
  arrowStyle: {
    width: width * 0.07,
    height: height * 0.07,
    resizeMode: 'contain',
  },
  calMainContain: {
    marginTop: '5%',
  },
});
