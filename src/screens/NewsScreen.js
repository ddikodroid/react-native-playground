import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import NewsCard from '../components/NewsCard';
import newAPI from '../apis/News';

const News = ({navigation}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    //newsResponse()
    getNewsFromAPI();
  }, []); //input array kosong agar useEffect selalu dijalankan saat ada perubahan di backend

  // const newsResponse = async() => {
  //   const response = await newAPI.get('/everything?q=bitcoin&from=2020-11-11&sortBy=publishedAt&apiKey=411746820f4540d0b2535ed669b6e85f')
  //   console.log(response.data)
  // }
  const getNewsFromAPI = () => {
    return newAPI
      .get(
        '/everything?q=bitcoin&from=2021-02-02&sortBy=publishedAt&apiKey=411746820f4540d0b2535ed669b6e85f',
      )
      .then(function (response) {
        setNews(response.data.articles);
        console.log(response.data.articles);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!news) {
    return null;
  }

  return (
    <View>
      {/* <Text>News</Text>
      <NewsCard></NewsCard> */}
      <FlatList
        data={news}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={(item) => {
          console.log('ini', item);
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
