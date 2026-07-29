import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

import styles from './EmptyStateStyles';

const EmptyState = ({
  title = 'No Data Found',
  subtitle = 'Create your first record.',
  buttonTitle,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Text variant="headlineSmall">{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      {buttonTitle ? (
        <Button mode="contained" onPress={onPress} style={styles.button}>
          {buttonTitle}
        </Button>
      ) : null}
    </View>
  );
};

export default EmptyState;
