import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const NewsCard = ({item}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{item.item.title}</Text>
      <Text style={styles.author}>{item.item.author}</Text>
      <Image style={styles.image} source={{uri: item.item.urlToImage}}/>
      <Text style={styles.description}>{item.item.description}</Text>
      {/* <Text>{item.item.author}</Text> */}
    </View>
  );
};

export default NewsCard;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: width * 0.05,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  title: {
    //width:width,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.03,
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  description: {
    //width:width,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.05,
    color: 'black',
    fontSize: 18,
  },
  image: {
    //width: width,
    height: height / 6,
    marginLeft: width * 0.05,
    marginRight: width * 0.05,
    marginVertical: height * 0.02,
  },
  author: {
    marginVertical: height * 0.01,
    marginHorizontal: width * 0.1,
    fontSize: 15,
    color: 'gray',
  },
});
