import React from 'react';
import {View, TextInput, Button} from 'react-native';

const SearchInput = ({searchQuery, onSearchChange, onSearchPress}) => {
  return (
    <View style={{flexDirection: 'row', marginBottom: 10}}>
      <TextInput
        style={{
          flex: 1,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          paddingHorizontal: 10,
        }}
        placeholder="Enter search query"
        onChangeText={onSearchChange}
        value={searchQuery}
      />
      <Button title="Search" onPress={onSearchPress} />
    </View>
  );
};

export default SearchInput;
