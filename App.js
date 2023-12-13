import { View, Text, FlatList } from 'react-native'
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
  } 
  const handleSearchChange = (text) => { 
    setSearchQuery(text)
  }
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
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

export default App