import React from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

const SearchInput = ({searchQuery, onSearchChange, onSearchPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInputContainer}
        placeholder="Search News Here"
        onChangeText={onSearchChange}
        value={searchQuery}
      />
      <TouchableOpacity style={styles.buttonContainer} onPress={onSearchPress}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
  buttonContainer: {
    backgroundColor: '#fb9e1d',
    justifyContent: 'center',
    height: 50,
    width: '20%',
    alignItems: 'center',
    borderRadius: 10,
  },
  textInputContainer: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: '900',
    color: 'white',
  },
});
export default SearchInput;
