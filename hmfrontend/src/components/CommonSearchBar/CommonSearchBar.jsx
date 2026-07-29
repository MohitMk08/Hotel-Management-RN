import React from 'react';
import { Searchbar } from 'react-native-paper';
import styles from './CommonSearchBarStyles';

const CommonSearchBar = ({
  value,
  onChangeText,
  placeholder = 'Search...',
  autoFocus = false,
}) => {
  return (
    <Searchbar
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.searchBar}
      autoFocus={autoFocus}
    />
  );
};

export default CommonSearchBar;
