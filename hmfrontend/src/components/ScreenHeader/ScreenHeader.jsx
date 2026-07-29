import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconButton, Text } from 'react-native-paper';

import styles from './ScreenHeaderStyles';
import COLORS from '../../constants/colors';

const ScreenHeader = ({
  title,
  onBackPress,

  // Old Props (keep for backward compatibility)
  rightIcon,
  onRightPress,

  // New Props
  rightActions = [],
}) => {
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.leftSection}>
          <IconButton
            icon="arrow-left"
            size={24}
            onPress={onBackPress}
            iconColor={COLORS.black}
          />

          <Text variant="headlineSmall" style={styles.title}>
            {title}
          </Text>
        </View>

        <View style={styles.rightSection}>
          {/* New Multiple Icons */}
          {rightActions.length > 0 ? (
            rightActions.map((item, index) => (
              <IconButton
                key={index}
                icon={item.icon}
                size={24}
                iconColor={COLORS.black}
                onPress={item.onPress}
              />
            ))
          ) : rightIcon ? (
            // Old Single Icon
            <IconButton
              icon={rightIcon}
              size={24}
              iconColor={COLORS.black}
              onPress={onRightPress}
            />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScreenHeader;
