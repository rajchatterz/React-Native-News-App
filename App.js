import { View, Text, FlatList, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import SearchInput from './component/SearchInput'
const App = () => {
  const [news, setNews] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  
  
  const fetchNews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${searchQuery}&from=2023-11-13&sortBy=publishedAt&apiKey=e6624f0c3cf54c51a4285cd8efec8524`)
      setNews(response.data.articles)
    } catch (error) {
      console.log("error found while fetching the data", error)
      
    }
  }
  const handleSearch = () => {
    fetchNews()
    setSearchQuery('')
  } 
  const handleSearchChange = (text) => { 
    setSearchQuery(text)
    
  }
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Image resizeMode='contain' style={styles.imageContainer} source={{ uri: item.urlToImage }} />
      <View style={styles.infoContainer}>
        <Text style={styles.infoContainerText}>{item.title}</Text>
        <Text>{ item.source.name}</Text>
      </View>
    </View>
  )
  return (
    <View>
      <SearchInput searchQuery={searchQuery} onSearchChange={handleSearchChange} onSearchPress={handleSearch} />
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item,index)=>index.toString()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    alignItems: 'center',
    marginTop:20,
    borderColor: 'black',
    borderBottomWidth: 0.3,
    
  },
  imageContainer: {
    width: 300,
    height: 170,
    borderRadius:20,
    marginHorizontal: 20,
    
    
    
  },
  infoContainer: {
    alignItems: 'center',
    
  },
  infoContainerText: {
    fontSize: 17,
    fontWeight: '700',
    color: 'black',
    
  }

})
export default App