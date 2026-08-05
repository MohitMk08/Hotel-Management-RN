import React from 'react';
import { View } from 'react-native';

import { Button, Icon, Text } from 'react-native-paper';

import styles from './EmptyStateStyles';

const EmptyState = ({
  icon = 'database-off-outline',
  iconSize = 60,
  iconColor = '#9DB8F7',

  title = 'No Data Found',
  subtitle = 'Create your first record.',

  buttonTitle,
  buttonIcon = 'plus',
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <Icon source={icon} size={iconSize} color={iconColor} />

      <Text style={styles.title}>{title}</Text>

      <Text style={styles.subtitle}>{subtitle}</Text>

      {buttonTitle ? (
        <Button
          mode="contained"
          icon={buttonIcon}
          onPress={onPress}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          {buttonTitle}
        </Button>
      ) : null}
    </View>
  );
};

export default EmptyState;
